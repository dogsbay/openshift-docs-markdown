{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Cloud Router and Cloud network address translation {id="cloud-experts-osd-limit-egress-ngfw-create-a-cloud-router_{{ context }}"}

Create a Cloud Router and Cloud network address translation (NAT). Private VMs can use the internet while their private IP addresses stay hidden. {._abstract}

**Procedure**

1.  Reserve an IP address for Cloud NAT by running the following command:
    ```terminal
    $ gcloud compute addresses create ${prefix}-${region}-cloudnatip \
        --region=${region}
    ```
1.  Create a Cloud Router by running the following command:
    ```terminal
    $ gcloud compute routers create ${prefix}-router \
        --region=${region} \
        --network=${prefix}-vpc
    ```
1.  Create a Cloud NAT by running the following command:
    ```terminal
    $ gcloud compute routers nats create ${prefix}-cloudnat-${region} \
        --router=${prefix}-router --router-region ${region} \
        --nat-all-subnet-ip-ranges \
        --nat-external-ip-pool=${prefix}-${region}-cloudnatip
    ```

**Verification**

*   Check that the Cloud Router and NAT gateway exist by running the following command:
    ```terminal
    $ gcloud compute routers describe ${prefix}-router --region=${region}
    ```

    The output lists the router and the NAT gateway you created.