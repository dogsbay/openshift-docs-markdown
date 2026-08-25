{%- set _mod_docs_content_type = "PROCEDURE" %}
# Authenticating with {{ gcp_short }} Workload Identity {id="cert-manager-configure-cloud-credentials-gcp-sts_{{ context }}"}

To securely access {{ gcp_first }} resources from your applications without managing long-lived keys, authenticate your workloads by using {{ gcp_short }} Workload Identity. {._abstract}

**Prerequisites**

*   You extracted and prepared the `ccoctl` binary.
*   You have installed version 1.11.1 or later of the {{ cert_manager_operator }}.
*   You have configured an {{ product_title }} cluster with {{ gcp_short }} Workload Identity by using the Cloud Credential Operator in a manual mode.

**Procedure**

1.  Create a directory to store a `CredentialsRequest` resource YAML file by running the following command:
    ```terminal
    $ mkdir credentials-request
    ```
1.  In the `credentials-request` directory, create a YAML file that contains the following `CredentialsRequest` manifest:
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

1.  Use the `ccoctl` tool to process `CredentialsRequest` objects by running the following command:
    ```terminal
    $ ccoctl gcp create-service-accounts \
        --name <user_defined_name> --output-dir=<path_to_output_dir> \
        --credentials-requests-dir=<path_to_credrequests_dir> \
        --workload-identity-pool <workload_identity_pool> \
        --workload-identity-provider <workload_identity_provider> \
        --project <gcp_project_id>
    ```
    ```terminal title="Example command"
    $ ccoctl gcp create-service-accounts \
        --name abcde-20230525-4bac2781 --output-dir=/home/outputdir \
        --credentials-requests-dir=/home/credentials-requests \
        --workload-identity-pool abcde-20230525-4bac2781 \
        --workload-identity-provider abcde-20230525-4bac2781 \
        --project openshift-gcp-devel
    ```
1.  Apply the secrets generated in the manifests directory of your cluster by running the following command:
    ```terminal
    $ ls <path_to_output_dir>/manifests/*-credentials.yaml | xargs -I{} oc apply -f {}
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
    NAME                          READY   STATUS    RESTARTS   AGE
    cert-manager-bd7fbb9fc-wvbbt  1/1     Running   0          15m39s
    ```
1.  Verify that the cert-manager controller pod is updated with {{ gcp_short }} workload identity credential volumes that are mounted under the path specified in `mountPath` by running the following command:
    ```terminal
    $ oc get -n cert-manager pod/<cert-manager_controller_pod_name> -o yaml
    ```
    ```terminal title="Example output"
    spec:
      containers:
      - args:
        ...
        volumeMounts:
        - mountPath: /var/run/secrets/openshift/serviceaccount
          name: bound-sa-token
          ...
        - mountPath: /.config/gcloud
          name: cloud-credentials
      ...
      volumes:
      - name: bound-sa-token
        projected:
          ...
          sources:
          - serviceAccountToken:
              audience: openshift
              ...
              path: token
      - name: cloud-credentials
        secret:
          ...
          items:
          - key: service_account.json
            path: application_default_credentials.json
          secretName: gcp-credentials
    ```