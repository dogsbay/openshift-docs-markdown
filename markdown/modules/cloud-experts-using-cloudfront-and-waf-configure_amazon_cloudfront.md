{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure Amazon CloudFront {id="cloud-experts-using-cloudfront-and-waf-configure_amazon_cloudfront_{{ context }}"}

Create an Amazon CloudFront distribution that directs traffic through AWS Web Application Firewall (WAF) to protect your workloads. {._abstract}

**Procedure**

1.  Retrieve the newly created custom ingress controller’s Network Load Balancer (NLB) hostname:
    ```terminal
    $ NLB=$(oc -n openshift-ingress get service router-cloudfront-waf \
      -o jsonpath='{.status.loadBalancer.ingress[0].hostname}')
    ```
1.  Import your certificate into Amazon Certificate Manager, where `cert.pem` is your wildcard certificate, `fullchain.pem` is your wildcard certificate’s chain and `privkey.pem` is your wildcard certificate’s private key.

    :::note

    Regardless of what region your cluster is deployed, you must import this certificate to `us-east-1` as Amazon CloudFront is a global AWS service.
    
    :::

    ```terminal title="Example"
    $ aws acm import-certificate --certificate file://cert.pem \
      --certificate-chain file://fullchain.pem \
      --private-key file://privkey.pem \
      --region us-east-1
    ```
1.  Log in to the [AWS console](https://us-east-1.console.aws.amazon.com/cloudfront/v3/home#/distributions/create) to create a CloudFront distribution.
1.  Configure the CloudFront distribution by using the following information:

    :::note

    If an option is not specified in the table below, leave the default, even if it is blank.
    
    :::

    | Option | Value |
    | --- | --- |
    | Origin domain | Output from the previous command ^[a]^ |
    | Name | rosa-waf-ingress ^[b]^ |
    | Viewer protocol policy | Redirect HTTP to HTTPS |
    | Allowed HTTP methods | GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE |
    | Cache policy | CachingDisabled |
    | Origin request policy | AllViewer |
    | Web Application Firewall (WAF) | Enable security protections |
    | Use existing WAF configuration | true |
    | Choose a web ACL | `cloudfront-waf` |
    | Alternate domain name (CNAME) | *.apps.example.com ^[c]^ |
    | Custom SSL certificate | Select the certificate you imported from the step above ^[d]^ |
    a. Run `echo ${{ NLB }}` to get the origin domain.
    b. If you have multiple clusters, ensure the origin name is unique.
    c. This should match the wildcard domain you used to create the custom ingress controller.
    d. This should match the alternate domain name entered above.
1.  Retrieve the Amazon CloudFront Distribution endpoint:
    ```terminal
    $ aws cloudfront list-distributions --query "DistributionList.Items[?Origins.Items[?DomainName=='${NLB}']].DomainName" --output text
    ```
1.  Update the DNS of your custom wildcard domain with a CNAME to the Amazon CloudFront Distribution endpoint from the step above.
    ```text title="Example"
    *.apps.example.com CNAME d1b2c3d4e5f6g7.cloudfront.net
    ```