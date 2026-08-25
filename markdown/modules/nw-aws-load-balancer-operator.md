{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the AWS Load Balancer Operator {id="nw-aws-load-balancer-operator_{{ context }}"}

The {{ aws_short }} Load Balancer Operator can tag the public subnets if the `kubernetes.io/role/elb` tag is missing. Also, the {{ aws_short }} Load Balancer Operator detects information from the underlying {{ aws_short }} cloud. {._abstract}

The {{ aws_short }} Load Balancer Operator detects the following information from the underlying {{ aws_short }} cloud:

*   The ID of the virtual private cloud (VPC) on which the cluster hosting the Operator is deployed.
*   Public and private subnets of the discovered VPC.

The {{ aws_short }} Load Balancer Operator supports the Kubernetes service resource of type `LoadBalancer` by using Network Load Balancer (NLB) with the `instance` target type only.

**Procedure**

1.  To deploy the {{ aws_short }} Load Balancer Operator on-demand from the software catalog, create a `Subscription` object by running the following command:
    ```terminal
    $ oc -n aws-load-balancer-operator get sub aws-load-balancer-operator --template='{{.status.installplan.name}}{{"\n"}}'
    ```
1.  Check if the status of an install plan is `Complete` by running the following command:
    ```terminal
    $ oc -n aws-load-balancer-operator get ip <install_plan_name> --template='{{.status.phase}}{{"\n"}}'
    ```
1.  View the status of the `aws-load-balancer-operator-controller-manager` deployment by running the following command:
    ```terminal
    $ oc get -n aws-load-balancer-operator deployment/aws-load-balancer-operator-controller-manager
    ```
    ```terminal title="Example output"
    NAME                                           READY     UP-TO-DATE   AVAILABLE   AGE
    aws-load-balancer-operator-controller-manager  1/1       1            1           23h
    ```