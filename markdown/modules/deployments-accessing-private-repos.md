{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing private repositories from DeploymentConfig objects {id="deployments-accessing-private-repos_{{ context }}"}

To pull container images from a private repository into a `DeploymentConfig` object in {{ product_title }}, you can add a pull secret to the object. Create the secret in the web console, then set it as the pull secret in the `DeploymentConfig` object. {._abstract}

**Procedure**

1.  Create a new project.
1.  Navigate to **Workloads** → **Secrets**. 
1.  Create a secret that contains credentials for accessing a private image repository.
1.  Navigate to **Workloads** → **DeploymentConfigs**. 
1.  Create a `DeploymentConfig` object.
1.  On the `DeploymentConfig` object editor page, set the **Pull Secret** and save your changes.