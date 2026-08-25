{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the ACK S3 controller {id="cloud-experts-using-aws-ack-install-ack_{{ context }}"}

Configure and deploy the AWS Controllers for Kubernetes (ACK) S3 controller by installing the ACK S3 Operator and associating it with an AWS Identity and Access Management (IAM) role. {._abstract}

**Procedure**

1.  Create a project to install the ACK S3 Operator into:
    ```terminal
    $ oc new-project ack-system
    ```
1.  Create a file with the ACK S3 Operator configuration:

    :::note

    `ACK_WATCH_NAMESPACE` is purposely left blank so the controller can properly watch all namespaces in the cluster.
    
    :::

    ```terminal
    $ cat << EOF  "${SCRATCH}/config.txt"
    ACK_ENABLE_DEVELOPMENT_LOGGING=true
    ACK_LOG_LEVEL=debug
    ACK_WATCH_NAMESPACE=
    AWS_REGION=${REGION}
    AWS_ENDPOINT_URL=
    ACK_RESOURCE_TAGS=${CLUSTER_NAME}
    ENABLE_LEADER_ELECTION=true
    LEADER_ELECTION_NAMESPACE=
    RECONCILE_DEFAULT_MAX_CONCURRENT_SYNCS=1
    FEATURE_FLAGS=
    FEATURE_GATES=
    EOF
    ```
1.  Use the file from the previous step to create a ConfigMap:
    ```terminal
    $ oc -n ack-system create configmap \
      --from-env-file=${SCRATCH}/config.txt ack-${ACK_SERVICE}-user-config
    ```
1.  Install the ACK S3 Operator from the software catalog:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: ack-${ACK_SERVICE}-controller
      namespace: ack-system
    spec:
      upgradeStrategy: Default
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: ack-${ACK_SERVICE}-controller
      namespace: ack-system
    spec:
      channel: alpha
      installPlanApproval: Automatic
      name: ack-${ACK_SERVICE}-controller
      source: community-operators
      sourceNamespace: openshift-marketplace
    EOF
    ```
1.  Annotate the ACK S3 Operator service account with the AWS IAM role to assume and restart the deployment:
    ```terminal
    $ oc -n ack-system annotate serviceaccount ${ACK_SERVICE_ACCOUNT} \
      eks.amazonaws.com/role-arn=${ROLE_ARN} && \
      oc -n ack-system rollout restart deployment ack-${ACK_SERVICE}-controller
    ```

**Verification**

1.  Verify that the ACK S3 Operator is running:
    ```terminal
    $ oc -n ack-system get pods
    ```
    ```text title="Example output"
    NAME                                 READY   STATUS    RESTARTS   AGE
    ack-s3-controller-585f6775db-s4lfz   1/1     Running   0          51s
    ```