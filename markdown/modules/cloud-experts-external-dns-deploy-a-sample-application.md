{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying a sample application {id="cloud-experts-external-dns-deploy-a-sample-application_{{ context }}"}

Now that the `ExternalDNS` controller is running, you can deploy a sample application to confirm that the custom domain is configured and trusted when you expose a new route. {._abstract}

**Procedure**

1.  Create a new project for your sample application:
    ```terminal
    $ oc new-project hello-world
    ```
1.  Deploy a hello world application:
    ```terminal
    $ oc new-app -n hello-world --image=docker.io/openshift/hello-openshift
    ```
1.  Create a route for the application specifying your custom domain name:
    ```terminal
    $ oc -n hello-world create route edge --service=hello-openshift hello-openshift-tls \
    --hostname hello-openshift.${DOMAIN}
    ```
1.  Check if the DNS record was created automatically by ExternalDNS:

    :::note

    It can take a few minutes for the record to appear in Amazon Route 53.
    
    :::

    ```terminal
    $ aws route53 list-resource-record-sets --hosted-zone-id ${ZONE_ID} \
       --query "ResourceRecordSets[?Type == 'CNAME']" | grep hello-openshift
    ```
1.  Optional: You can also view the TXT records that indicate they were created by ExternalDNS:
    ```terminal
    $ aws route53 list-resource-record-sets --hosted-zone-id ${ZONE_ID} \
       --query "ResourceRecordSets[?Type == 'TXT']" | grep ${DOMAIN}
    ```
1.  Curl the newly created DNS record to your sample application to verify the hello world application is accessible:
    ```terminal
    $ curl https://hello-openshift.${DOMAIN}
    ```
    ```terminal title="Example output"
    Hello OpenShift!
    ```