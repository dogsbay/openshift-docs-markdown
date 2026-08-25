{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using secrets {id="builds-using-secrets_{{ context }}"}

After creating secrets, you can create a pod to reference your secret, get logs, and delete the pod.

**Procedure**

1.  Create the pod to reference your secret by entering the following command:
    ```terminal
    $ oc create -f <your_yaml_file>.yaml
    ```
1.  Get the logs by entering the following command:
    ```terminal
    $ oc logs secret-example-pod
    ```
1.  Delete the pod by entering the following command:
    ```terminal
    $ oc delete pod secret-example-pod
    ```

**Additional resources**
{._additional-resources}

*   Example YAML files with secret data:
    ```yaml title="YAML file of a secret that will create four files"
    apiVersion: v1
    kind: Secret
    metadata:
      name: test-secret
    data:
      username: <username> # (1)
      password: <password> # (2)
    stringData:
      hostname: myapp.mydomain.com # (3)
      secret.properties: |- # (4)
        property1=valueA
        property2=valueB
    ```
    1.  File contains decoded values.
    1.  File contains decoded values.
    1.  File contains the provided string.
    1.  File contains the provided data.
        ```yaml title="YAML file of a pod populating files in a volume with secret data"
        apiVersion: v1
        kind: Pod
        metadata:
          name: secret-example-pod
        spec:
          containers:
            - name: secret-test-container
              image: busybox
              command: [ "/bin/sh", "-c", "cat /etc/secret-volume/*" ]
              volumeMounts:
                  # name must match the volume name below
                  - name: secret-volume
                    mountPath: /etc/secret-volume
                    readOnly: true
          volumes:
            - name: secret-volume
              secret:
                secretName: test-secret
          restartPolicy: Never
        ```
        ```yaml title="YAML file of a pod populating environment variables with secret data"
        apiVersion: v1
        kind: Pod
        metadata:
          name: secret-example-pod
        spec:
          containers:
            - name: secret-test-container
              image: busybox
              command: [ "/bin/sh", "-c", "export" ]
              env:
                - name: TEST_SECRET_USERNAME_ENV_VAR
                  valueFrom:
                    secretKeyRef:
                      name: test-secret
                      key: username
          restartPolicy: Never
        ```
        ```yaml title="YAML file of a BuildConfig object that populates environment variables with secret data"
        apiVersion: build.openshift.io/v1
        kind: BuildConfig
        metadata:
          name: secret-example-bc
        spec:
          strategy:
            sourceStrategy:
              env:
              - name: TEST_SECRET_USERNAME_ENV_VAR
                valueFrom:
                  secretKeyRef:
                    name: test-secret
                    key: username
        ```