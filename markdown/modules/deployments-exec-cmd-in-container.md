{%- set _mod_docs_content_type = "PROCEDURE" %}
# Executing commands inside a container {id="deployments-exe-cmd-in-container_{{ context }}"}

To change how a container starts in a `DeploymentConfig` object in {{ product_title }}, you can set a `command` and optional `args` in the pod template. These values override the image `ENTRYPOINT` and differ from lifecycle hooks, which run once per deployment at a specified time. {._abstract}

**Procedure**

1.  Add the `command` parameters to the `spec` field of the `DeploymentConfig` object. You can also add an `args` field, which modifies the `command` (or the `ENTRYPOINT` if `command` does not exist).
    ```yaml
    kind: DeploymentConfig
    apiVersion: apps.openshift.io/v1
    metadata:
      name: example-dc
    # ...
    spec:
      template:
    # ...
        spec:
         containers:
         - name: <container_name>
           image: 'image'
           command:
             - '<command>'
           args:
             - '<argument_1>'
             - '<argument_2>'
             - '<argument_3>'
    ```

    For example, to execute the `java` command with the `-jar` and `/opt/app-root/springboots2idemo.jar` arguments:
    ```yaml
    kind: DeploymentConfig
    apiVersion: apps.openshift.io/v1
    metadata:
      name: example-dc
    # ...
    spec:
      template:
    # ...
        spec:
          containers:
            - name: example-spring-boot
              image: 'image'
              command:
                - java
              args:
                - '-jar'
                - /opt/app-root/springboots2idemo.jar
    # ...
    ```