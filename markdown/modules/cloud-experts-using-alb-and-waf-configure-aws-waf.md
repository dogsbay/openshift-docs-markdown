{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure the AWS WAF {id="cloud-experts-using-alb-and-waf-configure-aws-waf_{{ context }}"}

You can use the AWS Web Application Firewall (WAF) service to monitor, protect, and control the HTTP and HTTPS requests that are forwarded to your protected web application resources, such as {{ product_title }}. {._abstract}

**Procedure**

1.  Create an AWS WAF rules file to apply to your web access control list (ACL):
    ```terminal
    $ cat << EOF > ${SCRATCH}/waf-rules.json
    [
        {
          "Name": "AWS-AWSManagedRulesCommonRuleSet",
          "Priority": 0,
          "Statement": {
            "ManagedRuleGroupStatement": {
              "VendorName": "AWS",
              "Name": "AWSManagedRulesCommonRuleSet"
            }
          },
          "OverrideAction": {
            "None": {}
          },
          "VisibilityConfig": {
            "SampledRequestsEnabled": true,
            "CloudWatchMetricsEnabled": true,
            "MetricName": "AWS-AWSManagedRulesCommonRuleSet"
          }
        },
        {
          "Name": "AWS-AWSManagedRulesSQLiRuleSet",
          "Priority": 1,
          "Statement": {
            "ManagedRuleGroupStatement": {
              "VendorName": "AWS",
              "Name": "AWSManagedRulesSQLiRuleSet"
            }
          },
          "OverrideAction": {
            "None": {}
          },
          "VisibilityConfig": {
            "SampledRequestsEnabled": true,
            "CloudWatchMetricsEnabled": true,
            "MetricName": "AWS-AWSManagedRulesSQLiRuleSet"
          }
        }
    ]
    EOF
    ```

    This enables the Core (Common) and SQL AWS Managed Rule Sets.
1.  Create an AWS WAF Web ACL using the rules you specified in the previous steps:
    ```terminal
    $ WAF_ARN=$(aws wafv2 create-web-acl \
      --name ${CLUSTER}-waf \
      --region ${REGION} \
      --default-action Allow={} \
      --scope REGIONAL \
      --visibility-config SampledRequestsEnabled=true,CloudWatchMetricsEnabled=true,MetricName=${CLUSTER}-waf-metrics \
      --rules file://${SCRATCH}/waf-rules.json \
      --query 'Summary.ARN' \
      --output text)
    ```
1.  Annotate the Ingress resource with the AWS WAF Web ACL (Amazon Resource Name) ARN:
    ```terminal
    $ oc annotate -n hello-world ingress.networking.k8s.io/hello-openshift-alb \
      alb.ingress.kubernetes.io/wafv2-acl-arn=${WAF_ARN}
    ```

**Verification**

1.  Wait 10 seconds for the rules to propagate and test that the application still works:
    ```terminal
    $ curl "http://${INGRESS}"
    ```
    ```text title="Example output"
    Hello OpenShift!
    ```
1.  Test that the WAF denies a bad request:
    ```terminal
    $ curl -X POST "http://${INGRESS}" \
      -F "user='<script><alert>Hello></alert></script>'"
    ```
    ```text title="Example output"
    <html>
    <head><title>403 Forbidden</title></head>
    <body>
    <center><h1>403 Forbidden</h1></center>
    </body>
    </html
    ```

    :::note

    Activation of the AWS WAF integration can sometimes take several minutes. If you do not receive a `403 Forbidden` error, please wait a few seconds and try again.
    
    :::


    The expected result is a `403 Forbidden` error, which means the AWS WAF is protecting your application.