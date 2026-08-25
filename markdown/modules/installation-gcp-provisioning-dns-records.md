{%- set _mod_docs_content_type = "PROCEDURE" %}
# Provisioning your own DNS records {id="installation-gcp-provisioning-own-dns-records_{{ context }}"}

Use the IP address of the API server to provision your own DNS record with the `api.<cluster_name>.<base_domain>.` hostname by using your cluster name and base cluster domain. Use the IP address of the Ingress service to provision your own DNS record with the `*.apps.<cluster_name>.<base_domain>.` hostname by using your cluster name and base cluster domain. {._abstract}


:::important

Before you use this feature, you must add the `userProvisionedDNS` parameter to the `install-config.yaml` file and enable the parameter. For more information, see "Enabling a user-managed DNS".

:::


**Prerequisites**

*   You installed your cluster.
*   You installed the `gcloud` CLI tool.

**Procedure**

1.  Determine the infrastructure ID of your cluster by running the following command:
    ```terminal
    $ infra_id=$(jq -r .infraID <installation_directory>/metadata.json)
    ```

    where:

    `<installation_directory>`
    :   Specifies the directory where you ran the installation program.

1.  Find the IP address of the API server:
    1.  If you installed a private cluster, determine the IP address of the API server by running the following command:
        ```terminal
        $ gcloud compute forwarding-rules describe "${infra_id}-api-internal" --project=<project_name> --region <region_name> --format json | jq -r .IPAddress
        ```

        where:

        `<project_name>`
        :   Specifies the name of your {{ gcp_full }} project.

        `<region_name>`
        :   Specifies the region where you installed your cluster.

    1.  If you installed a public cluster, determine the IP address of the API server by running the following command:
        ```terminal
        $ gcloud compute forwarding-rules describe --global "${infra_id}-apiserver" --format json | jq -r .IPAddress
        ```
1.  Use the IP address to provision your own DNS record with the `api.<cluster_name>.<base_domain>.` hostname by using your cluster name and base cluster domain.
1.  Find the IP address of the Ingress service:
    1.  If you installed a private cluster, find the IP address of the Ingress service by running the following command:
        ```terminal
        $ gcloud compute forwarding-rules list --project=<project_name> --filter="subnetwork:(projects/<project_name>/regions/<region_name>/subnetworks/<compute_subnet_name>)" --format="json" | jq -r '.[].IPAddress'
        ```

        where:

        `<project_name>`
        :   Specifies the name of your {{ gcp_full }} project.

        `<region_name>`
        :   Specifies the region where you installed your cluster.

        `<compute_subnet_name>`
        :   Specifies the name of the subnet that contains your compute nodes.

    1.  If you installed a public cluster, find the IP address by using the forwarding rule:
        1.  Find the forwarding rule for the Ingress service by running the following command:
            ```terminal
            $ ingress_forwarding_rule=$(gcloud compute target-pools list --format=json --filter="instances[]~${infra_id}" | jq -r .[].name)
            ```
        1.  Use the forwarding rule value to find the IP address of the Ingress service by running the following command:
            ```terminal
            $ gcloud compute forwarding-rules describe --region "<region_name>" "${ingress_forwarding_rule}" --format json | jq -r .IPAddress
            ```

            where:

            `<region_name>`
            :   Specifies the region where you installed your cluster.

1.  Use the IP address to provision your own DNS record with the `*.apps.<cluster_name>.<base_domain>.` hostname by using your cluster name and base cluster domain.