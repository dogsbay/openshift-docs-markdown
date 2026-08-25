{%- set _mod_docs_content_type = "PROCEDURE" %}
# Authenticating on {{ gcp_short }} {id="cert-manager-configure-cloud-credentials-gcp-non-sts_{{ context }}"}

To securely access {{ gcp_first }} resources, authenticate your workloads on {{ gcp_short }} by using the {{ cert_manager_operator }}. {._abstract}

**Prerequisites**

*   You have installed version 1.11.1 or later of the {{ cert_manager_operator }}.
*   You have configured the Cloud Credential Operator to operate in _mint_ or _passthrough_ mode.

**Procedure**

1.  Create a `CredentialsRequest` resource YAML file, such as, `sample-credential-request.yaml` by applying the following yaml:
    ```yaml
    apiVersion: cloudcredential.openshift.io/v1
    kind: CredentialsRequest
    metadata:
      name: cert-manager
      namespace: openshift-cloud-credential-operator
    spec:
      providerSpec:
        apiVersion: cloudcredential.openshift.io/v1
        kind: GCPProviderSpec
        predefinedRoles:
        - roles/dns.admin
      secretRef:
        name: gcp-credentials
        namespace: cert-manager
      serviceAccountNames:
      - cert-manager
    ```

    :::note

    The `dns.admin` role provides admin privileges to the service account for managing {{ gcp_full }} DNS resources. To ensure that the cert-manager runs with the service account that has the least privilege, you can create a custom role with the following permissions:

    *   `dns.resourceRecordSets.*`
    *   `dns.changes.*`
    *   `dns.managedZones.list`
    
    :::

1.  Create a `CredentialsRequest` resource by running the following command:
    ```terminal
    $ oc create -f sample-credential-request.yaml
    ```
1.  Update the subscription object for {{ cert_manager_operator }} by running the following command:
    ```terminal
    $ oc -n cert-manager-operator patch subscription openshift-cert-manager-operator --type=merge -p '{"spec":{"config":{"env":[{"name":"CLOUD_CREDENTIALS_SECRET_NAME","value":"gcp-credentials"}]}}}'
    ```

**Verification**

1.  Get the name of the redeployed cert-manager controller pod by running the following command:
    ```terminal
    $ oc get pods -l app.kubernetes.io/name=cert-manager -n cert-manager
    ```
    ```terminal title="Example output"
    NAME                                       READY   STATUS    RESTARTS   AGE
    cert-manager-bd7fbb9fc-wvbbt               1/1     Running   0          15m39s
    ```
1.  Verify that the cert-manager controller pod is updated with {{ gcp_short }} credential volumes that are mounted under the path specified in `mountPath` by running the following command:
    ```terminal
    $ oc get -n cert-manager pod/<cert-manager_controller_pod_name> -o yaml
    ```
    ```terminal title="Example output"
    spec:
      containers:
      - args:
        ...
        volumeMounts:
        ...
        - mountPath: /.config/gcloud
          name: cloud-credentials
        ....
      volumes:
      ...
      - name: cloud-credentials
        secret:
          ...
          items:
          - key: service_account.json
            path: application_default_credentials.json
          secretName: gcp-credentials
    ```