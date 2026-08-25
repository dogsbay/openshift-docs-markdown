{%- set _mod_docs_content_type = "PROCEDURE" %}
# Authenticating on AWS {id="cert-manager-configure-cloud-credentials-aws-non-sts_{{ context }}"}

To securely access AWS resources from your applications, authenticate your workloads on AWS by using the {{ cert_manager_operator }}. {._abstract}

**Prerequisites**

*   You have installed version 1.11.1 or later of the {{ cert_manager_operator }}.
*   You have configured the Cloud Credential Operator to operate in _mint_ or _passthrough_ mode.

**Procedure**

1.  Create a `CredentialsRequest` resource YAML file, for example, `sample-credential-request.yaml`, as follows:
    ```yaml
    apiVersion: cloudcredential.openshift.io/v1
    kind: CredentialsRequest
    metadata:
      name: cert-manager
      namespace: openshift-cloud-credential-operator
    spec:
      providerSpec:
        apiVersion: cloudcredential.openshift.io/v1
        kind: AWSProviderSpec
        statementEntries:
        - action:
          - "route53:GetChange"
          effect: Allow
          resource: "arn:aws:route53:::change/*"
        - action:
          - "route53:ChangeResourceRecordSets"
          - "route53:ListResourceRecordSets"
          effect: Allow
          resource: "arn:aws:route53:::hostedzone/*"
        - action:
          - "route53:ListHostedZonesByName"
          effect: Allow
          resource: "*"
      secretRef:
        name: aws-creds
        namespace: cert-manager
      serviceAccountNames:
      - cert-manager
    ```
1.  Create a `CredentialsRequest` resource by running the following command:
    ```terminal
    $ oc create -f sample-credential-request.yaml
    ```
1.  Update the subscription object for {{ cert_manager_operator }} by running the following command:
    ```terminal
    $ oc -n cert-manager-operator patch subscription openshift-cert-manager-operator --type=merge -p '{"spec":{"config":{"env":[{"name":"CLOUD_CREDENTIALS_SECRET_NAME","value":"aws-creds"}]}}}'
    ```

**Verification**

1.  Get the name of the redeployed cert-manager controller pod by running the following command:
    ```terminal
    $ oc get pods -l app.kubernetes.io/name=cert-manager -n cert-manager
    ```
    ```terminal title="Example output"
    NAME                          READY   STATUS    RESTARTS   AGE
    cert-manager-bd7fbb9fc-wvbbt  1/1     Running   0          15m39s
    ```
1.  Verify that the cert-manager controller pod is updated with AWS credential volumes that are mounted under the path specified in `mountPath` by running the following command:
    ```terminal
    $ oc get -n cert-manager pod/<cert-manager_controller_pod_name> -o yaml
    ```
    ```terminal title="Example output"
    ...
    spec:
      containers:
      - args:
        ...
        - mountPath: /.aws
          name: cloud-credentials
      ...
      volumes:
      ...
      - name: cloud-credentials
        secret:
          ...
          secretName: aws-creds
    ```