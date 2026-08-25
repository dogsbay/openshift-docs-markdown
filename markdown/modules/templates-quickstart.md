{%- set _mod_docs_content_type = "CONCEPT" %}
# Quick start templates {id="templates-quickstart_{{ context }}"}

To browse sample instant app and quick start templates on your {{ product_title }} cluster, review the default templates in the `openshift` project. Use these templates to deploy example applications for common languages and frameworks. {._abstract}

A quick start template is a basic example of an application running on {{ product_title }}. Quick starts come in a variety of languages and frameworks, and are defined in a template, which is constructed from a set of `Service`, `BuildConfig`, and `DeploymentConfig` objects. This template references the necessary images and source repositories to build and deploy the application.

Your administrator must have already installed these templates in your {{ product_title }} cluster, in which case you can select it from the web console.

Quick starts refer to a source repository that contains the application source code. To customize the quick start, fork the repository and, when creating an application from the template, substitute the default source repository name with your forked repository. This results in builds that are performed using your source code instead of the provided example source. You can then update the code in your source repository and launch a new build to see the changes reflected in the deployed application.

## Web framework quick start templates {id="templates-quickstart-web-framework_{{ context }}"}

These quick start templates provide a basic application of the indicated framework and language:

*   CakePHP: a PHP web framework that includes a MySQL database
*   Dancer: a Perl web framework that includes a MySQL database
*   Django: a Python web framework that includes a PostgreSQL database
*   NodeJS: a NodeJS web application that includes a MongoDB database
*   Rails: a Ruby web framework that includes a PostgreSQL database