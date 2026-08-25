{%- set _mod_docs_content_type = "PROCEDURE" %}
# Writing your application {id="templates-rails-writing-application_{{ context }}"}

You can create a Ruby on Rails application that uses PostgreSQL. Install the Rails gem, configure the `database.yml` file, and initialize the development and test databases. These steps ensure that your application can interact with PostgreSQL in both development and test environments. {._abstract}

**Procedure**

1.  Install the Rails gem by running the following command:
    ```terminal
    $ gem install rails
    ```
    ```terminal title="Example output"
    Successfully installed rails-4.3.0
    1 gem installed
    ```
1.  Create a new application with PostgreSQL as your database by running the following command:
    ```terminal
    $ rails new rails-app --database=postgresql
    ```
1.  Change into your new application directory by running the following command:
    ```terminal
    $ cd rails-app
    ```
1.  If you already have an application, ensure that the PostgreSQL adapter gem (`pg`) is present in your `Gemfile`. If not, edit your `Gemfile` by adding the gem:
    ```terminal
    gem 'pg'
    ```
1.  Generate a new `Gemfile.lock` with all your dependencies by running the following command:
    ```terminal
    $ bundle install
    ```
1.  Update the `default` section in the `config/database.yml` file to use the `postgresql` adapter, as shown in the following example:
    ```yaml
    default: &default
      adapter: postgresql
      encoding: unicode
      pool: 5
      host: localhost
      username: rails
      password: <password>
    ```
1.  Create the `development` and `test` databases for your application by running the following command:
    ```terminal
    $ rake db:create
    ```