{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating secrets and config maps {id="security-deploy-secrets_{{ context }}"}

You can use the `Secret` object type to provide a mechanism to hold sensitive information such as passwords, {{ product_title }} client configuration files, `dockercfg` files, and private source repository credentials. Secrets decouple sensitive content from pods.
 
You can mount secrets into containers by using a volume plugin or the system can use secrets to perform actions on behalf of a pod. {._abstract}

Config maps are similar to secrets, but are designed to support working with strings that do not contain sensitive information. The `ConfigMap` object holds key-value pairs of configuration data that can be consumed in pods or used to store configuration data for system components such as controllers.

For example, to add a secret to your deployment so that it can access a private image repository, use the following procedure.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Create a new project.
1.  Navigate to **Resources** → **Secrets** and create a new secret. Set `Secret Type` to `Image Secret` and `Authentication Type` to `Image Registry Credentials` to enter credentials for accessing a private image repository.
1.  When creating a deployment (for example, from the **Add to Project** → **Deploy Image** page), set the `Pull Secret` to your new secret.