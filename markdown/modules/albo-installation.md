{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the AWS Load Balancer Operator {id="aws-load-balancer-operator-installation_{{ context }}"}

You can install the AWS Load Balancer Operator by using the {{ oc_first }}. Use the same terminal session you used in _Setting up your environment to install the AWS Load Balancer Operator_ to make use of the environment variables. {._abstract}

**Procedure**

1.  Create a new project within your cluster for the AWS Load Balancer Operator:
    ```terminal
    $ oc new-project aws-load-balancer-operator
    ```
1.  Create an AWS IAM policy for the AWS Load Balancer Operator.
    1.  Download the appropriate IAM policy:
        ```
        $ curl -o ${SCRATCH}/operator-permission-policy.json https://raw.githubusercontent.com/openshift/aws-load-balancer-operator/refs/heads/main/hack/operator-permission-policy.json
        ```
    1.  Create the permission policy for the Operator:
        ```terminal
        $ aws iam create-policy \
                --policy-name aws-load-balancer-operator-policy \
                --policy-document file://${SCRATCH}/operator-permission-policy.json \
                --region ${REGION}
        ```

        Take note of the Operator policy Amazon Resource Name (ARN) in the output. The remainder of this process refers to this as `$OPERATOR_POLICY_ARN`.
1.  Create an AWS IAM role for the AWS Load Balancer Operator:
    1.  Create the trust policy for the Operator role:
        ```terminal
        $ cat <<EOF > "${SCRATCH}/operator-trust-policy.json"
        {
         "Version": "2012-10-17",
         "Statement": [
         {
         "Effect": "Allow",
         "Condition": {
           "StringEquals" : {
             "${OIDC_ENDPOINT}:sub": ["system:serviceaccount:aws-load-balancer-operator:aws-load-balancer-operator-controller-manager", "system:serviceaccount:aws-load-balancer-operator:aws-load-balancer-controller-cluster"]
           }
         },
         "Principal": {
           "Federated": "arn:aws:iam::${AWS_ACCOUNT_ID}:oidc-provider/${OIDC_ENDPOINT}"
         },
         "Action": "sts:AssumeRoleWithWebIdentity"
         }
         ]
        }
        EOF
        ```
    1.  Create the Operator role using the trust policy:
        ```terminal
        $ aws iam create-role --role-name "${CLUSTER_NAME}-alb-operator" \
            --assume-role-policy-document "file://${SCRATCH}/operator-trust-policy.json"
        ```

        Take note of the Operator role ARN in the output. The remainder of this process refers to this as `$OPERATOR_ROLE_ARN`.
    1.  Associate the Operator role and policy:
        ```terminal
        $ aws iam attach-role-policy --role-name "${CLUSTER_NAME}-alb-operator" \
            --policy-arn $OPERATOR_POLICY_ARN
        ```
1.  Install the AWS Load Balancer Operator by creating an `OperatorGroup` and a `Subscription`:
    ```terminal
    $ cat <<EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: aws-load-balancer-operator
      namespace: aws-load-balancer-operator
    spec:
      targetNamespaces: []
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: aws-load-balancer-operator
      namespace: aws-load-balancer-operator
    spec:
      channel: stable-v1
      name: aws-load-balancer-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
      config:
        env:
        - name: ROLEARN
          value: "${OPERATOR_ROLE_ARN}"
    EOF
    ```
1.  Create an AWS IAM policy for the AWS Load Balancer Controller.
    1.  Download the appropriate IAM policy:
        ```terminal
        $ curl -o ${SCRATCH}/controller-permission-policy.json https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.12.0/docs/install/iam_policy.json
        ```
    1.  Create the permission policy for the Controller:
        ```terminal
        $ aws iam create-policy \
            --region ${REGION} \
            --policy-name aws-load-balancer-controller-policy \
            --policy-document file://${SCRATCH}/controller-permission-policy.json
        ```

        Take note of the Controller policy ARN in the output. The remainder of this process refers to this as `$CONTROLLER_POLICY_ARN`.
1.  Create an AWS IAM role for the AWS Load Balancer Controller:
    1.  Create the trust policy for the Controller role:
        ```terminal
        $ cat <<EOF > ${SCRATCH}/controller-trust-policy.json
        {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Principal": {
                  "Federated": "arn:aws:iam::${AWS_ACCOUNT_ID}:oidc-provider/${OIDC_ENDPOINT}"
                },
                "Action": "sts:AssumeRoleWithWebIdentity",
                "Condition": {
                  "StringEquals": {
                    "${OIDC_ENDPOINT}:sub": "system:serviceaccount:aws-load-balancer-operator:aws-load-balancer-controller-cluster"
                    }
                }
              }
            ]
          }
        EOF
        ```
    1.  Create the Controller role using the trust policy:
        ```terminal
        CONTROLLER_ROLE_ARN=$(aws iam create-role --role-name "${CLUSTER_NAME}-albo-controller" \ --assume-role-policy-document "file://${SCRATCH}/controller-trust-policy.json" \ --query Role.Arn --output text) echo ${CONTROLLER_ROLE_ARN}
        ```

        Take note of the Controller role ARN in the output. The remainder of this process refers to this as `$CONTROLLER_ROLE_ARN`.
    1.  Associate the Controller role and policy:
        ```terminal
        $ aws iam attach-role-policy \
            --role-name "${CLUSTER_NAME}-albo-controller" \
            --policy-arn ${CONTROLLER_POLICY_ARN}
        ```
1.  Deploy an instance of the AWS Load Balancer Controller:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: networking.olm.openshift.io/v1
    kind: AWSLoadBalancerController
    metadata:
     name: cluster
    spec:
     credentialsRequestConfig:
       stsIAMRoleARN: ${CONTROLLER_ROLE_ARN}
    EOF
    ```

    :::note

    If you get an error here, wait a minute and try again. This situation happens because the Operator has not completed installation yet.
    
    :::

1.  Confirm that the Operator and Controller pods are both running:
    ```terminal
    $ oc -n aws-load-balancer-operator get pods
    ```

    If you do not see output similar to the following, wait a few moments and retry.
    ```terminal title="Example output"
    NAME                                                             READY   STATUS    RESTARTS   AGE
    aws-load-balancer-controller-cluster-6ddf658785-pdp5d            1/1     Running   0          99s
    aws-load-balancer-operator-controller-manager-577d9ffcb9-w6zqn   2/2     Running   0          2m4s
    ```