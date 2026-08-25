{%- set _mod_docs_content_type = "PROCEDURE" %}
# Cleaning up resources {id="cloud-experts-osd-limit-egress-ngfw-clean-resources_{{ context }}"}

Delete the {{ GCP }} networking infrastructure after deleting your cluster to prevent ongoing charges. The cluster deletion does not automatically remove virtual private cloud (VPC) networks, subnets, firewall policies, or domain name system (DNS) zones. {._abstract}

**Procedure**

1.  Authenticate by running the following command:
    ```terminal
    $ gcloud init
    ```
1.  Log in to your {{ GCP }} account by running the following command:
    ```terminal
    $ gcloud auth application-default login
    ```
1.  Log in to the {{ cluster_manager }} CLI tool by running the following command:
    ```terminal
    $ ocm login --use-auth-code
    ```

    You can now clean up the resources you created as part of this tutorial. To respect resource dependencies, delete them in the reverse order of their creation.
1.  Delete the association of the firewall policy with the VPC by running the following command:
    ```terminal
    $ gcloud compute network-firewall-policies associations delete \
          --name network-${prefix}-vpc \
          --firewall-policy=${prefix} \
          --global-firewall-policy \
          --project=${project_id}
    ```
1.  Delete the global network firewall policy by running the following command:
    ```terminal
    $ gcloud compute network-firewall-policies delete ${prefix} --global --project=${project_id}
    ```
1.  List and delete all user-defined DNS records from the Private DNS zone:
    ```terminal
    $ gcloud dns record-sets list \
        --project=${project_id} \
        --zone=${prefix}-googleapis \
        --filter="type!=NS AND type!=SOA" \
        --format="value(name,type)" | while read name type; do
      gcloud dns record-sets delete "$name" \
        --project=${project_id} \
        --zone=${prefix}-googleapis \
        --type="$type"
    done
    ```
1.  Delete the Private DNS Zone by running the following command:
    ```terminal
    $ gcloud dns managed-zones delete ${prefix}-googleapis --project=${project_id}
    ```
1.  Delete the Cloud NAT gateway:
    ```terminal
    $ gcloud compute routers nats delete ${prefix}-cloudnat-${region} \
        --router=${prefix}-router \
        --router-region=${region} \
        --project=${project_id}
    ```
1.  Delete the Cloud Router by running the following command:
    ```terminal
    $ gcloud compute routers delete ${prefix}-router --region=${region} --project=${project_id}
    ```
1.  Delete the reserved IP address by running the following command:
    ```terminal
    $ gcloud compute addresses delete ${prefix}-${region}-cloudnatip --region=${region} --project=${project_id}
    ```
1.  Delete the worker subnet by running the following command:
    ```terminal
    $ gcloud compute networks subnets delete ${prefix}-worker --region=${region} --project=${project_id}
    ```
1.  Delete the control plane subnet by running the following command:
    ```terminal
    $ gcloud compute networks subnets delete ${prefix}-control-plane --region=${region} --project=${project_id}
    ```
1.  Delete the Private Service Connect (PSC) subnet by running the following command:
    ```terminal
    $ gcloud compute networks subnets delete ${prefix}-psc --region=${region} --project=${project_id}
    ```
1.  Delete the VPC by running the following command:
    ```terminal
    $ gcloud compute networks delete ${prefix}-vpc --project=${project_id}
    ```