{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying your application to {{ product_title }} {id="templates-rails-deploying-application_{{ context }}"}

You can create an {{ product_title }} project to deploy your Ruby on Rails application. This separates your database, frontend, and route into distinct services that {{ product_title }} can manage independently. {._abstract}

Deploying your application on {{ product_title }} takes three steps:

1.  Creating a database service from the PostgreSQL image on {{ product_title }}.
1.  Creating a frontend service from the Ruby 2.0 builder image on {{ product_title }} and your Ruby on Rails source code, connected to the database service.
1.  Creating a route for your application.

**Procedure**

{% if openshift_enterprise or openshift_webscale or openshift_origin %}
*   Create a project for your Rails application by running the following command:
    ```terminal
    $ oc new-project rails-app --description="My Rails application" --display-name="Rails Application"
    ```
{% endif %}