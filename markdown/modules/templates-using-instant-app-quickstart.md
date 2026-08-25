{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using instant app and quick start templates {id="templates-using-instant-app-quickstart_{{ context }}"}

To try a sample application from an instant-app template on your {{ product_title }} cluster, create the application from the template and optionally fork the source repository of the template. Customize the build configuration to test changes and rebuild the application. {._abstract}

{{ product_title }} provides several default instant app and quick start templates to help you get started quickly creating a new application for different languages. Templates are provided for Rails (Ruby), Django (Python), Node.js, CakePHP (PHP), and Dancer (Perl). Your cluster administrator must create these templates in the default, global `openshift` project so you have access to them.

By default, the templates build using a public source repository on GitHub that contains the necessary application code.

**Procedure**

1.  List the available default instant app and quick start templates by running the following command:
    ```terminal
    $ oc get templates -n openshift
    ```
1.  Modify the source to build your own version of the application:
    1.  Fork the repository referenced by the default `SOURCE_REPOSITORY_URL` parameter of the template.
    1.  Override the value of the `SOURCE_REPOSITORY_URL` parameter when creating from the template, specifying your fork instead of the default value.

        By doing this, the build configuration created by the template now points to your fork of the application code. You can then modify the code and rebuild the application as needed.

        :::note

        Some of the instant app and quick start templates define a database `DeploymentConfig` object. The configuration they define uses ephemeral storage for the database content. These templates should be used for demonstration purposes only as all database data is lost if the database pod restarts for any reason.
        
        :::