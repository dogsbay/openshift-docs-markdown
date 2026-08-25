{%- set _mod_docs_content_type = "PROCEDURE" %}
# Authenticating with AWS Security Token Service {id="cert-manager-configure-cloud-credentials-aws-sts_{{ context }}"}

To securely access AWS resources from your applications without managing long-lived keys, authenticate your workloads by using the AWS Security Token Service (STS). {._abstract}

**Prerequisites**

*   You have extracted and prepared the `ccoctl` binary.
*   You have configured an {{ product_title }} cluster with AWS STS by using the Cloud Credential Operator in manual mode.

**Procedure**

1.  Create a directory to store a `CredentialsRequest` resource YAML file by running the following command:
    ```terminal
    $ mkdir credentials-request
    ```
1.  Create a `CredentialsRequest` resource YAML file under the `credentials-request` directory, such as, `sample-credential-request.yaml`, by applying the following yaml:
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
1.  Use the `ccoctl` tool to process `CredentialsRequest` objects by running the following command:
    ```terminal
    $ ccoctl aws create-iam-roles \
        --name <user_defined_name> --region=<aws_region> \
        --credentials-requests-dir=<path_to_credrequests_dir> \
        --identity-provider-arn <oidc_provider_arn> --output-dir=<path_to_output_dir>
    ```
    ```terminal title="Example output"
    2023/05/15 18:10:34 Role arn:aws:iam::XXXXXXXXXXXX:role/<user_defined_name>-cert-manager-aws-creds created
    2023/05/15 18:10:34 Saved credentials configuration to: <path_to_output_dir>/manifests/cert-manager-aws-creds-credentials.yaml
    2023/05/15 18:10:35 Updated Role policy for Role <user_defined_name>-cert-manager-aws-creds
    ```

    Copy the `<aws_role_arn>` from the output to use in the next step. For example, `"arn:aws:iam::XXXXXXXXXXXX:role/<user_defined_name>-cert-manager-aws-creds"`
1.  Add the `eks.amazonaws.com/role-arn="<aws_role_arn>"` annotation to the service account by running the following command:
    ```terminal
    $ oc -n cert-manager annotate serviceaccount cert-manager eks.amazonaws.com/role-arn="<aws_role_arn>"
    ```
1.  To create a new pod, delete the existing cert-manager controller pod by running the following command:
    ```terminal
    $ oc delete pods -l app.kubernetes.io/name=cert-manager -n cert-manager
    ```

    The AWS credentials are applied to a new cert-manager controller pod within a minute.

**Verification**

1.  Get the name of the updated cert-manager controller pod by running the following command:
    ```terminal
    $ oc get pods -l app.kubernetes.io/name=cert-manager -n cert-manager
    ```
    ```terminal title="Example output"
    NAME                          READY   STATUS    RESTARTS   AGE
    cert-manager-bd7fbb9fc-wvbbt  1/1     Running   0          39s
    ```
1.  Verify that AWS credentials are updated by running the following command:
    ```terminal
    $ oc set env -n cert-manager po/<cert_manager_controller_pod_name> --list
    ```
    ```terminal title="Example output"
    # pods/cert-manager-57f9555c54-vbcpg, container cert-manager-controller
    # POD_NAMESPACE from field path metadata.namespace
    AWS_ROLE_ARN=XXXXXXXXXXXX
    AWS_WEB_IDENTITY_TOKEN_FILE=/var/run/secrets/eks.amazonaws.com/serviceaccount/token
    ```