{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating additional worker machines in {{ gcp_short }} {id="installation-creating-gcp-worker_{{ context }}"}

You can create worker machines in {{ gcp_first }} for your cluster by using the Infrastructure Manager template. You can adjust the number of machines by modifying the number of `google_compute_instance` resources in the provided template. {._abstract}


:::note

If you do not use the provided Infrastructure Manager template to create your compute machines, you must review the provided information and manually create the infrastructure. If your cluster does not initialize correctly, you might have to contact Red Hat support with your installation logs.

If you are installing a three-node cluster, skip this step. A three-node cluster consists of three control plane machines, which also act as compute machines.

:::


**Prerequisites**

*   Ensure you defined the variables in the _Exporting common variables_, _Creating load balancers in {{ gcp_short }}_, and _Creating the bootstrap machine in {{ gcp_short }}_ sections.
*   Create the bootstrap machine.
*   Create the control plane machines.

**Procedure**

1.  Copy the template from the **Infrastructure Manager template for worker machines** section of this topic and save it as `06_worker.tf` in a folder called `06_worker` on your computer. This template describes the worker machines that your cluster requires.
    *   You can edit the `06_worker.tf` file to add additional tags to the compute machines, by modifying the existing `tags` stanza as follows:
        ```bash
        resource "google_compute_instance" "worker_0" {
        # ...
          tags = [
            "${var.infra_id}-worker-0",
            "custom-tag-example"
          ]
        # ...
        }
        ```
1.  Copy the `worker.ign` file from your installation directory into the `06_worker` folder by running the following command:
    ```terminal
    $ cp <installation_directory>/worker.ign 06_worker/worker.ign
    ```

    `<installation_directory>` specifies the directory where you created the Ignition configuration files.
1.  Create the deployment by running the following command:
    ```terminal
    $ gcloud infra-manager deployments apply <worker_deployment_name> \
      --location=${REGION} \
      --project=${PROJECT_NAME} \
      --local-source=./06_worker \
      --input-values=infra_id=${INFRA_ID},project=${PROJECT_NAME},region=${REGION},zone_0=${ZONE_0},zone_1=${ZONE_1},subnet=${COMPUTE_SUBNET},image=${CLUSTER_IMAGE},service_account_email=${WORKER_SERVICE_ACCOUNT} \
      --service-account=${INSTALL_SERVICE_ACCOUNT}
    ```

    `<worker_deployment_name>` specifies the name of the deployment.
1.  Remove the `worker.ign` file by running the following command:
    ```terminal
    $ rm 06_worker/worker.ign
    ```

**Verification**

{% include "./snippets/gcp-infra-manager-deployment-verify.md" %}