{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating service accounts {id="service-accounts-managing_{{ context }}"}

You can create a service account in a project and grant it permissions by
binding it to a role. {._abstract}

**Procedure**

1.  Optional: To view the service accounts in the current project:
    ```terminal
    $ oc get sa
    ```
    ```terminal title="Example output"
    NAME       SECRETS   AGE
    builder    1         2d
    default    1         2d
    deployer   1         2d
    ```
1.  To create a new service account in the current project:
    ```terminal
    $ oc create sa <service_account_name>
    ```

    To create a service account in a different project, specify `-n <project_name>`.
    ```terminal title="Example output"
    serviceaccount "robot" created
    ```

    :::tip

    You can alternatively apply the following YAML to create the service account:

    ```yaml
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: <service_account_name>
      namespace: <current_project>
    ```
    
    :::

1.  Optional: View the secrets for the service account:
    ```terminal
    $ oc describe sa robot
    ```
    ```terminal title="Example output"
    Name:                robot
    Namespace:           project1
    Labels:              <none>
    Annotations:         openshift.io/internal-registry-pull-secret-ref: robot-dockercfg-qzbhb
    Image pull secrets:  robot-dockercfg-qzbhb
    Mountable secrets:   robot-dockercfg-qzbhb
    Tokens:              <none>
    Events:              <none>
    ```