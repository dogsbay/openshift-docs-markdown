{%- set _mod_docs_content_type = "PROCEDURE" %}
# Consuming secrets using the Downward API {id="nodes-containers-downward-api-container-secrets_{{ context }}"}

When creating pods, you can use the downward API to inject secrets
so image and application authors can create an image
for specific environments. {._abstract}

**Procedure**

1.  Create a secret to inject:
    1.  Create a `secret.yaml` file similar to the following:
        ```yaml
        apiVersion: v1
        kind: Secret
        metadata:
          name: mysecret
        data:
          password: <password>
          username: <username>
        type: kubernetes.io/basic-auth
        ```
    1.  Create the secret object from the `secret.yaml` file by using the following command:
        ```terminal
        $ oc create -f secret.yaml
        ```
1.  Create a pod that references the `username` field from the above `Secret` object:
    1.  Create a `pod.yaml` file similar to the following:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: dapi-env-test-pod
        spec:
          securityContext:
            runAsNonRoot: true
            seccompProfile:
              type: RuntimeDefault
          containers:
            - name: env-test-container
              image: gcr.io/google_containers/busybox
              command: [ "/bin/sh", "-c", "env" ]
              env:
                - name: MY_SECRET_USERNAME
                  valueFrom:
                    secretKeyRef:
                      name: mysecret
                      key: username
              securityContext:
                allowPrivilegeEscalation: false
                capabilities:
                  drop: [ALL]
          restartPolicy: Never
        # ...
        ```
    1.  Create the pod from the `pod.yaml` file by using the following command:
        ```terminal
        $ oc create -f pod.yaml
        ```

**Verification**

*   Check the container logs for the `MY_SECRET_USERNAME` value by using the following command:
    ```terminal
    $ oc logs -p dapi-env-test-pod
    ```