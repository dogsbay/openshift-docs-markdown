{%- set _mod_docs_content_type = "PROCEDURE" %}
# Install the AWS Load Balancer Operator {id="cloud-experts-aws-load-balancer-operator-install_{{ context }}"}

Install the AWS Load Balancer Operator to provision and manage AWS Application Load Balancers (ALBs) and Network Load Balancers (NLBs) for your {{ product_title }} cluster. {._abstract}

**Procedure**

1.  Create an AWS Identity and Access Management (IAM) policy for the AWS Load Balancer Controller:

    :::note

    The policy is sourced from [the upstream AWS Load Balancer Controller policy](https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.4.4/docs/install/iam_policy.json) plus permission to create tags on subnets. This is required by the Operator to function.
    
    :::

    ```terminal
    $ oc new-project aws-load-balancer-operator
    $ POLICY_ARN=$(aws iam list-policies --query \
         "Policies[?PolicyName=='aws-load-balancer-operator-policy'].{ARN:Arn}" \
         --output text)
    $ if [[ -z "${POLICY_ARN}" ]]; then
        wget -O "${SCRATCH}/load-balancer-operator-policy.json" \
           https://raw.githubusercontent.com/rh-mobb/documentation/main/content/rosa/aws-load-balancer-operator/load-balancer-operator-policy.json
         POLICY_ARN=$(aws --region "$REGION" --query Policy.Arn \
         --output text iam create-policy \
         --policy-name aws-load-balancer-operator-policy \
         --policy-document "file://${SCRATCH}/load-balancer-operator-policy.json")
    fi
    $ echo $POLICY_ARN
    ```
1.  Create an AWS IAM trust policy for AWS Load Balancer Operator:
    ```terminal
    $ cat <<EOF > "${SCRATCH}/trust-policy.json"
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
       "Federated": "arn:aws:iam::$AWS_ACCOUNT_ID:oidc-provider/${OIDC_ENDPOINT}"
     },
     "Action": "sts:AssumeRoleWithWebIdentity"
     }
     ]
    }
    EOF
    ```
1.  Create an AWS IAM role for the AWS Load Balancer Operator:
    ```terminal
    $ ROLE_ARN=$(aws iam create-role --role-name "${ROSA_CLUSTER_NAME}-alb-operator" \
       --assume-role-policy-document "file://${SCRATCH}/trust-policy.json" \
       --query Role.Arn --output text)
    $ echo $ROLE_ARN

    $ aws iam attach-role-policy --role-name "${ROSA_CLUSTER_NAME}-alb-operator" \
         --policy-arn $POLICY_ARN
    ```
1.  Create a secret for the AWS Load Balancer Operator to assume the newly created AWS IAM role:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: v1
    kind: Secret
    metadata:
      name: aws-load-balancer-operator
      namespace: aws-load-balancer-operator
    stringData:
      credentials: |
        [default]
        role_arn = $ROLE_ARN
        web_identity_token_file = /var/run/secrets/openshift/serviceaccount/token
    EOF
    ```
1.  Install the AWS Load Balancer Operator:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: aws-load-balancer-operator
      namespace: aws-load-balancer-operator
    spec:
      upgradeStrategy: Default
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: aws-load-balancer-operator
      namespace: aws-load-balancer-operator
    spec:
      channel: stable-v1.0
      installPlanApproval: Automatic
      name: aws-load-balancer-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
      startingCSV: aws-load-balancer-operator.v1.0.0
    EOF
    ```
1.  Deploy an instance of the AWS Load Balancer Controller using the Operator:

    :::note

    If you get an error, the Operator has not completed installing yet. Wait briefly and retry the step.
    
    :::

    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: networking.olm.openshift.io/v1
    kind: AWSLoadBalancerController
    metadata:
      name: cluster
    spec:
      credentials:
        name: aws-load-balancer-operator
    EOF
    ```
1.  Check that the Operator and controller pods are both running:
    ```terminal
    $ oc -n aws-load-balancer-operator get pods
    ```
    ```terminal title="Example output"
    NAME                                                             READY   STATUS    RESTARTS   AGE
    aws-load-balancer-controller-cluster-6ddf658785-pdp5d            1/1     Running   0          99s
    aws-load-balancer-operator-controller-manager-577d9ffcb9-w6zqn   2/2     Running   0          2m4s
    ```