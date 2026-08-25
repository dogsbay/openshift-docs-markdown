{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying a global firewall policy {id="cloud-experts-osd-limit-egress-ngfw-deploy-policy_{{ context }}"}

Create a global network firewall policy. Attach it to your VPC so you can control traffic that leaves your {{ product_title }} cluster. {._abstract}

**Procedure**

1.  Run this command to create a global network firewall policy:
    ```terminal
    $ gcloud compute network-firewall-policies create \
        ${prefix} \
        --description "OpenShift Dedicated Egress Firewall" \
        --global
    ```
1.  Run this command to attach the new policy to the VPC you created earlier:
    ```terminal
    $ gcloud compute network-firewall-policies associations create \
          --name ${prefix}-vpc-association \
          --firewall-policy ${prefix} \
          --network ${prefix}-vpc \
          --global-firewall-policy

    ```

**Verification**

*   Run this command to check that the policy exists and is attached to your VPC:
    ```terminal
    $ gcloud compute network-firewall-policies describe ${prefix} --global
    ```

    The output lists the policy and its link to your VPC.