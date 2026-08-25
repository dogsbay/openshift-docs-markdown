{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Kubernetes pull secret {id="creating-pull-secret-fusion-san_{{ context }}"}

After installing the {{ FusionSAN }} Operator, you must create a Kubernetes secret object to hold the IBM entitlement key for pulling the required container images from the IBM container registry. {._abstract}

**Prerequisites**

*   You installed the `oc` CLI.
*   You have access to the cluster as a user with the `cluster-admin` role.
*   You installed the {{ FusionSAN }} Operator and created the `ibm-fusion-access` namespace in the process.

**Procedure**

1.  Log in to the [**IBM Container software library**](https://myibm.ibm.com/products-services/containerlibrary) with your {{ FusionSAN }} **IBMid** and **password**.
1.  In the **IBM Container software library**, get the entitlement key:
    1.  If you do not have an entitlement key yet, click **Get entitlement key** or **Add new key**, and then click **Copy**.
    1.  If you already have an entitlement key, click **Copy**.
1.  Save the entitlement key in a safe place.
1.  Create the secret object by running the `oc create` command, replacing `<ibm-entitlement-key>` with the entitlement key that you copied in step 2.
    ```terminal
    $ oc create secret -n ibm-fusion-access generic fusion-pullsecret \
    --from-literal=ibm-entitlement-key=<ibm-entitlement-key>
    ```

**Verification**

1.  In the {{ product_title }} web console, navigate to **Workloads** -> **Secrets**.
1.  Find the `fusion-pullsecret` in the list.