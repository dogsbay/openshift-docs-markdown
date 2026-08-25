{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing IDP options {id="learning-getting-started-idp-cli-overview_{{ context }}"}

To determine which authentication methods are available for your cluster’s users, view your identity provider (IDP) options. You can quickly list these supported configurations by using the {{ rosa_cli }}. {._abstract}

**Procedure**

*   Before creating your IDP, you can view all IDP options by running the following command:
    ```terminal
    $ rosa create idp --help
    ```