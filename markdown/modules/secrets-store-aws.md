{% if secrets-store-provider == "AWS Secrets Manager" %}
{%- set aws_secrets_manager = true -%}
{% endif %}
{% if secrets-store-provider == "AWS Systems Manager Parameter Store" %}
{%- set aws_systems_manager_parameter_store = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mounting secrets from {{ secrets_store_provider }} {id="secrets-store-aws_{{ context }}"}

You can use the {{ secrets_store_operator }} to mount secrets from {{ secrets_store_provider }} external secrets store to a Container Storage Interface (CSI) volume in {{ product_title }}. Using an external secret store protects information that you do not want developers to have and can be more secure than `secret` objects. {._abstract}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the `jq` tool.
*   You have extracted and prepared the `ccoctl` utility.
*   You have installed the cluster on {{ aws_first }} and the cluster uses {{ aws_short }} Security Token Service (STS).
*   You have installed the {{ secrets_store_operator }}. For more information, see "Installing the {{ secrets_store_driver }}".
*   You have configured {{ secrets_store_provider }} to store the required secrets.

**Procedure**

1.  Install the {{ secrets_store_provider }} provider:
    1.  Create a YAML file by using the following example configuration:

        :::important

        The {{ secrets_store_provider }} provider for the {{ secrets_store_driver }} is an upstream provider.

        This configuration is modified from the configuration provided in the upstream [AWS documentation](https://github.com/aws/secrets-store-csi-driver-provider-aws#installing-the-aws-provider) so that it works properly with {{ product_title }}. Changes to this configuration might impact functionality.
        
        :::

        ```yaml title="Example aws-provider.yaml file"
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: csi-secrets-store-provider-aws
          namespace: openshift-cluster-csi-drivers
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRole
        metadata:
          name: csi-secrets-store-provider-aws-cluster-role
        rules:
        - apiGroups: [""]
          resources: ["serviceaccounts/token"]
          verbs: ["create"]
        - apiGroups: [""]
          resources: ["serviceaccounts"]
          verbs: ["get"]
        - apiGroups: [""]
          resources: ["pods"]
          verbs: ["get"]
        - apiGroups: [""]
          resources: ["nodes"]
          verbs: ["get"]
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: ClusterRoleBinding
        metadata:
          name: csi-secrets-store-provider-aws-cluster-rolebinding
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: ClusterRole
          name: csi-secrets-store-provider-aws-cluster-role
        subjects:
        - kind: ServiceAccount
          name: csi-secrets-store-provider-aws
          namespace: openshift-cluster-csi-drivers
        ---
        apiVersion: apps/v1
        kind: DaemonSet
        metadata:
          namespace: openshift-cluster-csi-drivers
          name: csi-secrets-store-provider-aws
          labels:
            app: csi-secrets-store-provider-aws
        spec:
          updateStrategy:
            type: RollingUpdate
          selector:
            matchLabels:
              app: csi-secrets-store-provider-aws
          template:
            metadata:
              labels:
                app: csi-secrets-store-provider-aws
            spec:
              serviceAccountName: csi-secrets-store-provider-aws
              hostNetwork: false
              containers:
                - name: provider-aws-installer
                  image: public.ecr.aws/aws-secrets-manager/secrets-store-csi-driver-provider-aws:1.0.r2-50-g5b4aca1-2023.06.09.21.19
                  imagePullPolicy: Always
                  args:
                      - --provider-volume=/etc/kubernetes/secrets-store-csi-providers
                  resources:
                    requests:
                      cpu: 50m
                      memory: 100Mi
                    limits:
                      cpu: 50m
                      memory: 100Mi
                  securityContext:
                    privileged: true
                  volumeMounts:
                    - mountPath: "/etc/kubernetes/secrets-store-csi-providers"
                      name: providervol
                    - name: mountpoint-dir
                      mountPath: /var/lib/kubelet/pods
                      mountPropagation: HostToContainer
              tolerations:
              - operator: Exists
              volumes:
                - name: providervol
                  hostPath:
                    path: "/etc/kubernetes/secrets-store-csi-providers"
                - name: mountpoint-dir
                  hostPath:
                    path: /var/lib/kubelet/pods
                    type: DirectoryOrCreate
              nodeSelector:
                kubernetes.io/os: linux
        ```
    1.  Grant privileged access to the `csi-secrets-store-provider-aws` service account by running the following command:
        ```terminal
        $ oc adm policy add-scc-to-user privileged -z csi-secrets-store-provider-aws -n openshift-cluster-csi-drivers
        ```
    1.  Create the provider resources by running the following command:
        ```terminal
        $ oc apply -f aws-provider.yaml
        ```
1.  Grant the read permission to the service account for the AWS secret object:
    1.  Create a directory to contain the credentials request by running the following command:
        ```terminal
        $ mkdir <aws_creds_directory_name>
        ```
    1.  Create a YAML file that defines the `CredentialsRequest` resource configuration. See the following example configuration:
        ```yaml {minja}
        apiVersion: cloudcredential.openshift.io/v1
        kind: CredentialsRequest
        metadata:
          name: aws-creds-request
          namespace: openshift-cloud-credential-operator
        spec:
          providerSpec:
            apiVersion: cloudcredential.openshift.io/v1
            kind: AWSProviderSpec
        {%- if aws_secrets_manager %}
            statementEntries:
            - action:
              - "secretsmanager:GetSecretValue"
              - "secretsmanager:DescribeSecret"
              effect: Allow
              resource: "arn:*:secretsmanager:*:*:secret:testSecret-??????"
        {%- endif %}
        {%- if aws_systems_manager_parameter_store %}
            statementEntries:
            - action:
              - "ssm:GetParameter"
              - "ssm:GetParameters"
              effect: Allow
              resource: "arn:*:ssm:*:*:parameter/testParameter*"
        {%- endif %}
          secretRef:
            name: aws-creds
            namespace: my-namespace
          serviceAccountNames:
          - <service_account_name>
        ```
    1.  Retrieve the OpenID Connect (OIDC) provider by running the following command:
        ```terminal
        $ oc get --raw=/.well-known/openid-configuration | jq -r '.issuer'
        ```
        ```terminal title="Example output"
        https://<oidc_provider_name>
        ```

        Copy the OIDC provider name `<oidc_provider_name>` from the output to use in the next step.
    1.  Use the `ccoctl` tool to process the credentials request by running the following command:
        ```terminal
        $ ccoctl aws create-iam-roles \
            --name my-role --region=<aws_region> \
            --credentials-requests-dir=<aws_creds_dir_name> \
            --identity-provider-arn arn:aws:iam::<aws_account_id>:oidc-provider/<oidc_provider_name> --output-dir=<output_dir_name>
        ```
        ```terminal title="Example output"
        2023/05/15 18:10:34 Role arn:aws:iam::<aws_account_id>:role/my-role-my-namespace-aws-creds created
        2023/05/15 18:10:34 Saved credentials configuration to: credrequests-ccoctl-output/manifests/my-namespace-aws-creds-credentials.yaml
        2023/05/15 18:10:35 Updated Role policy for Role my-role-my-namespace-aws-creds
        ```

        Copy the `<aws_role_arn>` from the output to use in the next step. For example, `arn:aws:iam::<aws_account_id>:role/my-role-my-namespace-aws-creds`.
    1.  Bind the service account with the role ARN by running the following command:
        ```terminal
        $ oc annotate -n my-namespace sa/aws-provider eks.amazonaws.com/role-arn="<aws_role_arn>"
        ```
1.  Create a secret provider class to define your secrets store provider:
    1.  Create a YAML file that defines the `SecretProviderClass` object:
        ```yaml title="Example secret-provider-class-aws.yaml" {minja}
        apiVersion: secrets-store.csi.x-k8s.io/v1
        kind: SecretProviderClass
        metadata:
          name: my-aws-provider
          namespace: my-namespace
        spec:
          provider: aws
          parameters:
        {%- if aws_secrets_manager %}
            objects: |
              - objectName: "testSecret"
                objectType: "secretsmanager"
        {%- endif %}
        {%- if aws_systems_manager_parameter_store %}
            objects: |
              - objectName: "testParameter"
                objectType: "ssmparameter"
        {%- endif %}
        ```

        where:

        `metadata.name`
        :   Specifies the name for the secret provider class.

        `metadata.namespace`
        :   Specifies the namespace for the secret provider class.

        `spec.provider`
        :   Specifies the provider as `aws`.

        `spec.parameters`
        :   Specifies the provider-specific configuration parameters.

    1.  Create the `SecretProviderClass` object by running the following command:
        ```terminal
        $ oc create -f secret-provider-class-aws.yaml
        ```
1.  Create a deployment to use this secret provider class:
    1.  Create a YAML file that defines the `Deployment` object:
        ```yaml title="Example deployment.yaml"
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: my-aws-deployment
          namespace: my-namespace
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: my-storage
          template:
            metadata:
              labels:
                app: my-storage
            spec:
              serviceAccountName: aws-provider
              containers:
              - name: busybox
                image: k8s.gcr.io/e2e-test-images/busybox:1.29
                command:
                  - "/bin/sleep"
                  - "10000"
                volumeMounts:
                - name: secrets-store-inline
                  mountPath: "/mnt/secrets-store"
                  readOnly: true
              volumes:
                - name: secrets-store-inline
                  csi:
                    driver: secrets-store.csi.k8s.io
                    readOnly: true
                    volumeAttributes:
                      secretProviderClass: "my-aws-provider"
        ```

        where:

        `metadata.name`
        :   Specifies the name for the deployment.

        `metadata.namespace`
        :   Specifies the namespace for the deployment. This must be the same namespace as the secret provider class.

        `spec.template.spec.volumes.csi.volumeAttributes.secretProviderClass`
        :   Specifies the name of the secret provider class.

    1.  Create the `Deployment` object by running the following command:
        ```terminal
        $ oc create -f deployment.yaml
        ```

**Verification**

*   Verify that you can access the secrets from {{ secrets_store_provider }} in the pod volume mount:
    1.  List the secrets in the pod mount by running the following command:
        ```terminal
        $ oc exec my-aws-deployment-<hash> -n my-namespace -- ls /mnt/secrets-store/
        ```
        ```terminal title="Example output" {minja}
        {% if aws_secrets_manager %}
        testSecret
        {% endif %}
        {% if aws_systems_manager_parameter_store %}
        testParameter
        {% endif %}
        ```
    1.  View a secret in the pod mount by running the following command:
        ```terminal
        $ oc exec my-aws-deployment-<hash> -n my-namespace -- cat /mnt/secrets-store/testSecret
        ```
        ```terminal title="Example output"
        <secret_value>
        ```

{% if secrets-store-provider == "AWS Secrets Manager" %}
{%- set aws_secrets_manager = "" -%}
{% endif %}
{% if secrets-store-provider == "AWS Systems Manager Parameter Store" %}
{%- set aws_systems_manager_parameter_store = "" -%}
{% endif %}