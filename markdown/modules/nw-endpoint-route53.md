{%- set _mod_docs_content_type = "REFERENCE" %}
# Ingress Operator endpoint configuration for {{ aws_short }} Route 53 {id="nw-endpoint-route53_{{ context }}"}

Configure Ingress Operator endpoints for {{ product_title }} clusters in {{ aws_first }} GovCloud (US) regions. Verifying these settings helps to ensure that your cluster connects to the correct API endpoints. {._abstract}

If you install in either {{ aws_short }} GovCloud (US) US-West or US-East region, the Ingress Operator uses `us-gov-west-1` region for Route53 and tagging API clients.

The Ingress Operator uses `https://tagging.us-gov-west-1.amazonaws.com` as the tagging API endpoint if a tagging custom endpoint is configured that includes the string 'us-gov-east-1'.

For more information on AWS GovCloud (US) endpoints, see the [Service Endpoints](https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/using-govcloud-endpoints.html) in the AWS documentation about GovCloud (US).


:::important

Private, disconnected installations are not supported for {{ aws_short }} GovCloud when you install in the `us-gov-east-1` region.

:::


```yaml title="Example Route 53 configuration"
platform:
  aws:
    region: us-gov-west-1
    serviceEndpoints:
    - name: ec2
      url: https://ec2.us-gov-west-1.amazonaws.com
    - name: elasticloadbalancing
      url: https://elasticloadbalancing.us-gov-west-1.amazonaws.com
    - name: route53
      url: https://route53.us-gov.amazonaws.com
    - name: tagging
      url: https://tagging.us-gov-west-1.amazonaws.com
```
++
where:
++


`https://route53.us-gov.amazonaws.com`
:   Defaults to `https://route53.us-gov.amazonaws.com` for both {{ aws_short }} GovCloud (US) regions.

`https://tagging.us-gov-west-1.amazonaws.com`
:   Only the US-West region has endpoints for tagging. Omit this parameter if your cluster is in another region.