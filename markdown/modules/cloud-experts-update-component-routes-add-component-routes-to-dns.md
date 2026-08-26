{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add component route DNS records to your hosting provider {id="cloud-experts-update-component-routes-add-component-routes-to-dns_{{ context }}"}

You can add component route Domain Name System (DNS) records to your hosting provider to map the new component route hostnames to the load balancer. {._abstract}

**Procedure**

*   In your hosting provider, add DNS records that map the `CNAME` of your new component route hostnames to the load balancer hostname that you found in [Find the hostname of the load balancer in your cluster](https://docs.redhat.com/en/documentation/red_hat_openshift_service_on_aws_classic_architecture/4/html-single/tutorials/index#cloud-experts-update-component-routes-find-lb-hostname_cloud-experts-update-component-routes).