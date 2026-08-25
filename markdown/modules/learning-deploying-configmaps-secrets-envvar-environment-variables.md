{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuration using environment variables {id="learning-deploying-configmaps-secrets-envvar-environment-variables_{{ context }}"}

You can change application behavior without requiring code changes by configuring environment variables. Setting, viewing, and updating these variables in {{ product_title }} allows you to easily customize how different deployments behave. {._abstract}

**Procedure**

*   In the OSToy application, in the left menu, click **ENV Variables**, displaying the environment variables available to the OSToy application. The code snippet shows an example of an environmental variable configuration:

    **For example**:
    ```text
    {
      "npm_config_local_prefix": "/opt/app-root/src",
      "STI_SCRIPTS_PATH": "/usr/libexec/s2i",
      "npm_package_version": "1.7.0",
      "APP_ROOT": "/opt/app-root",
      "NPM_CONFIG_PREFIX": "/opt/app-root/src/.npm-global",
      "OSTOY_MICROSERVICE_PORT_8080_TCP_PORT": "8080",
      "NODE": "/usr/bin/node",
      "LD_PRELOAD": "libnss_wrapper.so",
      "KUBERNETES_SERVICE_HOST": "172.30.0.1",
      "OSTOY_MICROSERVICE_PORT": "tcp://172.30.60.255:8080",
      "OSTOY_PORT": "tcp://172.30.152.25:8080",
      "npm_package_name": "ostoy",
      "OSTOY_SERVICE_PORT_8080_TCP": "8080",
      "_": "/usr/bin/node"
      "ENV_TOY_CONFIGMAP": "ostoy-configmap -env"
    }
    ```