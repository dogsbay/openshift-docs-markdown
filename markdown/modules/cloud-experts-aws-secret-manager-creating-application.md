{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create an application that uses an AWS Secrets Manager secret {id="cloud-experts-aws-secret-manager-creating-application_{{ context }}"}

Deploy a sample application with the `SecretProviderClass` Container Storage Interface (CSI) volume to verify that your workload can retrieve secrets from AWS Secrets Manager. {._abstract}

**Procedure**

1.  Create an {{ OCP_short }} project by running the following command:
    ```terminal
    $ oc new-project my-application
    ```
1.  Annotate the default service account to use the Security Token Service (STS) role by running the following command:
    ```terminal
    $ oc annotate -n my-application serviceaccount default \
        eks.amazonaws.com/role-arn=$ROLE_ARN
    ```
1.  Create a secret provider class to access our secret by running the following command:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: secrets-store.csi.x-k8s.io/v1
    kind: SecretProviderClass
    metadata:
      name: my-application-aws-secrets
    spec:
      provider: aws
      parameters:
        objects: |
          - objectName: "MySecret"
            objectType: "secretsmanager"
    EOF
    ```
1.  Create a deployment by using our secret in the following command:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: v1
    kind: Pod
    metadata:
      name: my-application
      labels:
        app: my-application
    spec:
      volumes:
      - name: secrets-store-inline
        csi:
          driver: secrets-store.csi.k8s.io
          readOnly: true
          volumeAttributes:
            secretProviderClass: "my-application-aws-secrets"
      containers:
      - name: my-application-deployment
        image: k8s.gcr.io/e2e-test-images/busybox:1.29
        command:
          - "/bin/sleep"
          - "10000"
        volumeMounts:
        - name: secrets-store-inline
          mountPath: "/mnt/secrets-store"
          readOnly: true
    EOF
    ```

**Verification**

*   Verify the pod has the secret mounted by running the following command:
    ```terminal
    $ oc exec -it my-application -- cat /mnt/secrets-store/MySecret
    ```