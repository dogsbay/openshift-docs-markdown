{%- set _mod_docs_content_type = "PROCEDURE" %}
# Provisioning your own DNS records {id="installation-aws-provisioning-own-dns-records_{{ context }}"}

Use your cluster name and base cluster domain to configure a CNAME record for the API service `api.<cluster_name>.<base_domain>.` with the API load balancer DNS name. Similarly, use the load balancer DNS name of the Ingress service to provision a CNAME record for the `*.apps.<cluster_name>.<base_domain>.` hostname by using your cluster name and base cluster domain. {._abstract}

{%- set FeatureName = "User-provisioned DNS" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

**Prerequisites**

*   You have installed the {{ aws_short }} CLI.

**Procedure**

1.  Add the `userProvisionedDNS` parameter to the `install-config.yaml` file and enable the parameter. For more information, see "Enabling a user-managed DNS".
1.  Install your cluster.
1.  If you are installing a private cluster, set the `api_lb_name` variable by running the following command:
    ```terminal
    $ api_lb_name="${INFRA_ID}-int"
    ```
1.  If you are installing a public cluster, set the `api_lb_name` variable by running the following command:
    ```terminal
    $ api_lb_name="${INFRA_ID}-ext"
    ```
1.  To retrieve the DNS name of the API service, run the following command:
    ```terminal
    $ aws --region ${REGION} elbv2 describe-load-balancers --names ${api_lb_name} --query 'LoadBalancers[*].DNSName' --output text
    ```
1.  Use the DNS name and your cluster name and base cluster domain to configure your own DNS record with the `api.<cluster_name>.<base_domain>.` hostname.
1.  To retrieve the DNS name of the Ingress service, run the following command:
    ```terminal
    $ ingress_lb_name=$(aws --region ${REGION} resourcegroupstaggingapi get-resources --resource-type-filters elasticloadbalancing:loadbalancer --tag-filters Key=kubernetes.io/cluster/${INFRA_ID},Values=owned Key=kubernetes.io/service-name,Values=openshift-ingress/router-default --query 'ResourceTagMappingList[*].ResourceARN | [0]' --output text | awk -F'/' '{print $2}')
    ```
1.  Run the following command, which uses the variable `ingress_lb_name` generated from the previous command:
    ```terminal
    $ aws --region ${REGION} elb describe-load-balancers --load-balancer-names ${ingress_lb_name} --query 'LoadBalancerDescriptions[].DNSName' --output text
    ```
1.  Use the DNS name and your cluster name and base cluster domain to configure your own DNS record with the `*.apps.<cluster_name>.<base_domain>.` hostname.