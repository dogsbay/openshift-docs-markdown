{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing bootstrap resources in {{ gcp_short }} {id="installation-gcp-user-infra-wait-for-bootstrap_{{ context }}"}

After you create all of the required infrastructure in {{ gcp_first }}, wait for the bootstrap process to complete on the machines that you provisioned by using the Ignition config files. The installation program created the Ignition config files.

**Prerequisites**

*   Ensure you defined the variables in the _Exporting common variables_ and _Creating load balancers in {{ gcp_short }}_ sections.
*   Create the bootstrap machine.
*   Create the control plane machines.

**Procedure**

1.  Change to the directory that includes the installation program and run the following command:
    ```terminal
    $ ./openshift-install wait-for bootstrap-complete --dir <installation_directory> \ (1)
        --log-level info (2)
    ```
    1.  For `<installation_directory>`, specify the path to the directory where you stored the installation files.
    1.  To view different installation details, specify `warn`, `debug`, or `error` instead of `info`.

        If the command exits without a `FATAL` warning, your production control plane has initialized.
1.  To remove the bootstrap instance group from the backend services' backends, run the following commands:
    ```terminal
    $ gcloud compute backend-services remove-backend ${INFRA_ID}-api-internal --region=${REGION} --instance-group=${INFRA_ID}-bootstrap-ig --instance-group-zone=${ZONE_0}
    ```
    ```terminal
    $ ingress_backendservice=$(gcloud compute backend-services list --filter="backends.group~${INFRA_ID}" --format='value(name)' | grep -v "${INFRA_ID}")
    ```
    1.  If `ingress_backendservice` is not empty, run the following `describe` command for the bootstrap group:
        ```terminal
        $ gcloud compute backend-services describe ${ingress_backendservice} --region=${REGION}
        ```
    1.  If the `describe` command displays that the bootstrap group is one of its backends, run the following `remove-backend` command to remove the bootstrap group from the backends:
        ```terminal
        $ gcloud compute backend-services remove-backend ${ingress_backendservice} --region=${REGION} --instance-group=${INFRA_ID}-bootstrap-ig --instance-group-zone=${ZONE_0}
        ```
    1.  To remove the bucket and the deployment, run the following commands:
        ```terminal
        $ gcloud storage rm "gs://${INFRA_ID}-bootstrap-ignition/bootstrap.ign"
        ```
        ```terminal
        $ gcloud storage rm --recursive "gs://${INFRA_ID}-bootstrap-ignition/"
        ```
        ```terminal
        $ gcloud infra-manager deployments delete <bootstrap_deployment_name> \
            --project=${PROJECT_NAME} --location=${REGION} --quiet
        ```

        Specify the name of the bootstrap deployment you created for `<bootstrap_deployment_name>`.