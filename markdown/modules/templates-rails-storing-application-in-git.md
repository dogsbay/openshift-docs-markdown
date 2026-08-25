{%- set _mod_docs_content_type = "PROCEDURE" %}
# Storing your application in Git {id="templates-rails-storing-application-in-git_{{ context }}"}

You can commit your Rails application to Git and push the source to a remote repository. Remote storage keeps your source available for deployment on {{ product_title }}. {._abstract}

**Prerequisites**

*   You have installed Git.

**Procedure**

1.  Verify that you are in your Rails application directory by running the following command:
    ```terminal
    $ ls -1
    ```
    ```terminal title="Example output"
    app
    bin
    config
    config.ru
    db
    Gemfile
    Gemfile.lock
    lib
    log
    public
    Rakefile
    README.rdoc
    test
    tmp
    vendor
    ```
1.  Initialize a Git repository in your Rails application directory by running the following command:
    ```terminal
    $ git init
    ```
1.  Stage all application files by running the following command:
    ```terminal
    $ git add .
    ```
1.  Commit the staged files by running the following command:
    ```terminal
    $ git commit -m "initial commit"
    ```
1.  Create a GitHub repository for your application.
1.  Set the remote that points to your `git` repository by running the following command:
    ```terminal
    $ git remote add origin git@github.com:<namespace/repository-name>.git
    ```
1.  Push your application to your remote Git repository by running the following command:
    ```terminal
    $ git push
    ```