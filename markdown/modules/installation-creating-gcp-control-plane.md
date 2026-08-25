{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the control plane machines in {{ gcp_short }} {id="installation-creating-gcp-control-plane_{{ context }}"}

You must create the control plane machines in {{ gcp_first }} for your cluster to use. One way to create these machines is to modify the provided Infrastructure Manager template. {._abstract}


:::note

If you do not use the provided template to create your control plane machines, you must review the provided information and manually create the infrastructure. If your cluster does not initialize correctly, you might have to contact Red Hat support with your installation logs.

:::


**Prerequisites**

*   You defined the variables in the _Exporting common variables_, _Creating load balancers in {{ gcp_short }}_, _Creating IAM roles in {{ gcp_short }}_, and _Creating the bootstrap machine in {{ gcp_short }}_ sections.
*   You created the bootstrap machine.
*   You created the Ignition configuration files.

**Procedure**

1.  Copy the template from the **Infrastructure Manager template for control plane machines** section of this topic and save it as `05_control_plane.tf` in a folder called `05_control_plane` on your computer. This template describes the control plane machines that your cluster requires.
    *   You can edit the `05_control_plane.tf` file to add additional tags to the control plane machines, by modifying the existing `tags` stanza. The following example adds a custom tag to the first control plane machine, which is named `master_0`:
        ```bash
        resource "google_compute_instance" "master_0" {
        # ...
          tags = [
            "${var.infra_id}-master",
            "custom_tag_example"
          ]
        # ...
        }
        ```
1.  Copy the `master.ign` file from your installation directory into the `05_control_plane` folder by running the following command:
    ```terminal
    $ cp <installation_directory>/master.ign 05_control_plane/master.ign
    ```

    `<installation_directory>` specifies the directory where you created the Ignition configuration files.
1.  Create the control plane deployment by running the following command:
    ```terminal
    $ gcloud infra-manager deployments apply <control_plane_deployment> \
      --location=${REGION} \
      --project=${PROJECT_NAME} \
      --local-source=./05_control_plane \
      --input-values=infra_id=${INFRA_ID},project=${PROJECT_NAME},region=${REGION},zone_0=${ZONE_0},zone_1=${ZONE_1},zone_2=${ZONE_2},subnet=${CONTROL_SUBNET},image=${CLUSTER_IMAGE},service_account_email=${MASTER_SERVICE_ACCOUNT} \
      --service-account=${INSTALL_SERVICE_ACCOUNT}
    ```

    `<control_plane_deployment>` specifies the name of the control plane deployment.
1.  Delete the temporary ignition file from the `05_control_plane` folder by running the following command:
    ```terminal
    $ rm 05_control_plane/master.ign
    ```
1.  The templates do not manage load balancer membership due to limitations of Infrastructure Manager, so you must add the control plane machines manually.
    1.  Add the first control plane machine to an internal load balancer instance group by running the following command:
        ```terminal
        $ gcloud compute instance-groups unmanaged add-instances ${INFRA_ID}-master-${ZONE_0}-ig --zone=${ZONE_0} --instances=${INFRA_ID}-master-0
        ```
    1.  Add the second control plane machine to an internal load balancer instance group by running the following command:
        ```terminal
        $ gcloud compute instance-groups unmanaged add-instances ${INFRA_ID}-master-${ZONE_1}-ig --zone=${ZONE_1} --instances=${INFRA_ID}-master-1
        ```
    1.  Add the third control plane machine to an internal load balancer instance group by running the following command:
        ```terminal
        $ gcloud compute instance-groups unmanaged add-instances ${INFRA_ID}-master-${ZONE_2}-ig --zone=${ZONE_2} --instances=${INFRA_ID}-master-2
        ```
1.  For an external cluster, you must also add the control plane machines to external load balancer target pools.
    1.  Add the first control plane machine to an external load balancer pool by running the following command:
        ```terminal
        $ gcloud compute target-pools add-instances ${INFRA_ID}-api-target-pool --instances-zone="${ZONE_0}" --instances=${INFRA_ID}-master-0
        ```
    1.  Add the second control plane machine to an external load balancer pool by running the following command:
        ```terminal
        $ gcloud compute target-pools add-instances ${INFRA_ID}-api-target-pool --instances-zone="${ZONE_1}" --instances=${INFRA_ID}-master-1
        ```
    1.  Add the third control plane machine to an external load balancer pool by running the following command:
        ```terminal
        $ gcloud compute target-pools add-instances ${INFRA_ID}-api-target-pool --instances-zone="${ZONE_2}" --instances=${INFRA_ID}-master-2
        ```

**Verification**

{% include "./snippets/gcp-infra-manager-deployment-verify.md" %}