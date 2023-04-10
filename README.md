# RuYi - As You Desire

RuYi is a clone of Kickstarter, a crowdfunding website where users can create projects and support projects
that they want to see made. RuYi is made using Ruby on Rails on the backend with a PostgreSQL database,
and a React/Redux frontend with jQuery handling AJAX requests.

[Live Site Here](https://ruyi.up.railway.app)

## Features

### Viewing Featured Projects
  Users can see highlighted projects through the homepage, organized into different categories tabs. Clicking on a project leads directly to the project show page, where you can see the full proposal and pledge dollars to support it.

![](app/assets/images/ruyi.gif)

### Creating and Editing Projects
Although you can always see the start project link in the header, it will prompt you to login if you're not. After logging in, you can create a project using a multitabbed form that includes a preview page at the end. The preview page leverages the same presentational React component as the show page so that users can see almost an exact copy of what their project may look like.

![](app/assets/images/createprojectform.gif)

Editing projects uses the same form, except that the fields are prefilled. In order to accomplish this, I tried many different methods, including creating a slice of state in the UI reducer or passing in multiple props into the presentational component. I eventually solved this issue by initializing an advanced container, which wraps the form in another React Component, and then checking if the project is already in the Redux store before fetching:
  ```javascript
  class EditProjectForm extends React.Component {
    componentDidMount () {
      if (!this.props.currentProject) this.props.fetchProject(this.props.projId);
    }

    render() {
    //...
    if (this.props.currentUser.id === this.props.currentProject.creator_id) {
      return (<ProjectForm
        //...
      />)
      }
    }

    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProjectForm));
  }
  ```

### Searching for Projects
RuYi features a fuzzy search of projects by utilizing PostgreSQL's built-in full-text search and pg_trgm module. In addition, I accelerate the speed of searches through adding gin indexes to the searched columns. The code below shows the migration in Rails ActiveRecord:

```Ruby
class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :img_url, null: false
      t.string :blurb, null: false
      t.text :story, null: false
      t.string :category, null: false
      t.integer :goal, null: false
      t.integer :pledged_amount, null: false, default: 0
      t.boolean :public, null: false, default: false
      t.integer :creator_id, null: false

      t.timestamps
    end

    add_index :projects, :title, unique: true
    add_index :projects, :category
    add_index :projects, :creator_id
    enable_extension "pg_trgm"
    enable_extension "btree_gin"
    add_index :projects, :title, using: :gin, name: "trgm_index_on_title"
    add_index :projects, :category, using: :gin, name: "trgm_idx_on_category"
  end
end
```

On the frontend, RuYi makes minimal AJAX calls when it is predictive searching. The search bar only fires off requests when the query is longer than two characters, and comes back with a limited number of results. If the user is looking for more results, they can then navigate to the discover page, where a full paginated results list is rendered.
