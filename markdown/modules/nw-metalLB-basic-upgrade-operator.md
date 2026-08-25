{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually upgrading the MetalLB Operator {id="upgrading-metallb-operator_{{ context }}"}

To manually control when the MetalLB Operator upgrades in {{ product_title }}, you set `installPlanApproval` to Manual in the Subscription custom resource and approve the install plan. You then verify the upgrade by using the `ClusterServiceVersion` status. {._abstract}

**Prerequisites**

*   You updated your cluster to the latest z-stream release.
*   You used the software catalog to install the MetalLB Operator. 
*   Access the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Get the YAML definition of the `metallb-operator` subscription in the `metallb-system` namespace by entering the following command:
    ```terminal
    $ oc -n metallb-system get subscription metallb-operator -o yaml
    ```
1.  Edit the `Subscription` CR by setting the `installPlanApproval` parameter to `Manual`:
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: metallb-operator
      namespace: metallb-system
    # ...
    spec:
       channel: stable
       installPlanApproval: Manual
       name: metallb-operator
       source: redhat-operators
       sourceNamespace: openshift-marketplace
    # ...
    ```
1.  Find the latest {{ product_title }} {{ product_version }} version of the MetalLB Operator by entering the following command:
    ```terminal
    $ oc -n metallb-system get csv
    ```
1.  Check the install plan that exists in the namespace by entering the following command.
    ```terminal
    $ oc -n metallb-system get installplan
    ```

    The following example output shows `install-tsz2g` as a manual install plan:
    ```terminal
    NAME            CSV                                     APPROVAL    APPROVED
    install-shpmd   metallb-operator.v{{ product_version }}.0-202502261233   Automatic   true
    install-tsz2g   metallb-operator.v{{ product_version }}.0-202503102139   Manual      false
    ```
1.  Edit the install plan that exists in the namespace by entering the following command. Ensure that you replace `<name_of_installplan>` with the name of the install plan, such as `install-tsz2g`.
    ```terminal
    $ oc edit installplan <name_of_installplan> -n metallb-system
    ```
    1.  With the install plan open in your editor, set the `spec.approval` parameter to `Manual` and set the `spec.approved` parameter to `true`.

        :::note

        After you edit the install plan, the upgrade operation starts. If you enter the `oc -n metallb-system get csv` command during the upgrade operation, the output might show the `Replacing` or the `Pending` status.
        
        :::


**Verification**

*   To verify that the Operator is upgraded, enter the following command and then check that output shows `Succeeded` for the Operator:
    ```terminal
    $ oc -n metallb-system get csv
    ```