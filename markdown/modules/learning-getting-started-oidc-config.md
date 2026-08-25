{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating your OIDC configuration {id="learning-getting-started-oidc-config_{{ context }}"}

In this workshop, we will use the automatic mode when creating the OpenID Connect (OIDC) configuration. We will also store the OIDC ID as an environment variable for later use. The command uses the {{ rosa_cli }} to create your cluster’s unique OIDC configuration.  {._abstract}

**Procedure**

*   Create the OIDC configuration by running the following command:
    ```terminal
    $ export OIDC_ID=$(rosa create oidc-config --mode auto --managed --yes -o json | jq -r '.id')
    ```