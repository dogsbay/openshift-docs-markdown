{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a welcome page {id="templates-rails-creating-welcome-page_{{ context }}"}

You can run the Rails generator to create a custom welcome page for your Rails application. A welcome page gives you content to display when you run the Rails server and open the application in your browser. {._abstract}

**Procedure**

1.  Run the Rails generator by running the following command:
    ```terminal
    $ rails generate controller welcome index
    ```

    The command creates all the necessary files.
1.  Edit line 2 in the `config/routes.rb` file as follows:
    ```ruby
    root 'welcome#index'
    ```
1.  Run the Rails server to verify that the page is available by running the following command:
    ```terminal
    $ rails server
    ```

    Verify that the page is available by visiting `http://localhost:3000` in your browser. If the page does not display, check the server logs for errors.