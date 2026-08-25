{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating DNS records on a public hosted zone for AWS by using Red Hat External DNS Operator {id="nw-control-dns-records-public-hosted-zone-aws_{{ context }}"}

You can create DNS records on a public hosted zone for AWS by using the Red Hat External DNS Operator. You can use the same instructions to create DNS records on a hosted zone for AWS GovCloud. {._abstract}

**Procedure**

1.  Check the user profile by running the following command. The profile, such as `system:admin`, must have access to the `kube-system` namespace. If you do not have the credentials, you can fetch the credentials from the `kube-system` namespace to use the cloud provider client by running the following command:
    ```terminal
    $ oc whoami
    ```
1.  Fetch the values from the `aws-creds` secret that exists in the `kube-system` namespace.
    ```terminal
    $ export AWS_ACCESS_KEY_ID=$(oc get secrets aws-creds -n kube-system  --template={{.data.aws_access_key_id}} | base64 -d)
    ```
    ```terminal
    $ export AWS_SECRET_ACCESS_KEY=$(oc get secrets aws-creds -n kube-system  --template={{.data.aws_secret_access_key}} | base64 -d)
    ```
1.  Get the routes to check the domain:
    ```terminal
    $ oc get routes --all-namespaces | grep console
    ```
    ```terminal title="Example output"
    openshift-console          console             console-openshift-console.apps.testextdnsoperator.apacshift.support                       console             https   reencrypt/Redirect     None
    openshift-console          downloads           downloads-openshift-console.apps.testextdnsoperator.apacshift.support                     downloads           http    edge/Redirect          None
    ```
1.  Get the list of DNS zones and find the DNS zone that corresponds to the domain of the route that you previously queried:
    ```terminal
    $ aws route53 list-hosted-zones | grep testextdnsoperator.apacshift.support
    ```
    ```terminal title="Example output"
    HOSTEDZONES	terraform	/hostedzone/Z02355203TNN1XXXX1J6O	testextdnsoperator.apacshift.support.	5
    ```
1.  Create the `ExternalDNS` CR for the `route` source:
    ```yaml
    $ cat <<EOF | oc create -f -
    apiVersion: externaldns.olm.openshift.io/v1beta1
    kind: ExternalDNS
    metadata:
      name: sample-aws
    spec:
      domains:
      - filterType: Include
        matchType: Exact
        name: testextdnsoperator.apacshift.support
      provider:
        type: AWS
      source:
        type: OpenShiftRoute
        openshiftRouteOptions:
          routerName: default
    EOF
    ```

    where:

    `metadata.name`
    :   Specifies the name of the external DNS resource.

    `spec.domains`
    :   By default all hosted zones are selected as potential targets. You can include a hosted zone that you need.

    `domains.matchType`
    :   Specifies that the matching of the domain from the target zone has to be exact. Exact as opposed to regular expression match.

    `domains.name`
    :   Specifies the exact domain of the zone you want to update. The hostname of the routes must be subdomains of the specified domain.

    `provider.type`
    :   Specifies the `AWS Route53` DNS provider.

    `source`
    :   Specifies the options for the source of DNS records.

    `source.type`
    :   Specifies the `OpenShiftRoute` resource as the source for the DNS records which gets created in the previously specified DNS provider.

    `openshiftRouteOptions.routerName`
    :   If the source is `OpenShiftRoute`, then you can pass the OpenShift Ingress Controller name. External DNS Operator selects the canonical hostname of that router as the target while creating the CNAME record.

1.  Check the records created for {{ product_title }} routes by using the following command:
    ```terminal
    $ aws route53 list-resource-record-sets --hosted-zone-id Z02355203TNN1XXXX1J6O --query "ResourceRecordSets[?Type == 'CNAME']" | grep console
    ```