{%- set _mod_docs_content_type = "REFERENCE" %}
# Resolving a noncompliant policy hold during an update {id="core-cluster-upgrade-ts-noncompliant-policy_{{ context }}"}

During the update, {{ cgu_operator }} verifies the status of `ClusterVersion` for the {{ product_title }} update and `Subscription` for OLM Operators.
If errors occur during those updates, the status does not change to the expected value and the policies do not become compliant.
{{ cgu_operator }} holds at that point waiting for compliance. {._abstract}

If you are monitoring the update, you can fix the issue on the target cluster and the update continues automatically when the policy becomes compliant.


`ClusterGroupUpgrade` custom resource (CR) has timed out
:   Delete the timed-out CR by running the following command:
    ```terminal
    $ oc delete cgu <timed_out_cgu_name> -n <namespace>
    ```

    All policies revert to `inform` mode, leaving the cluster at the point where the issue occurred.

    Fix the issue that caused the timeout, then re-create the `ClusterGroupUpgrade` CR to resume the update by running the following command:
    ```terminal
    $ oc apply -f <cgu_cr_filename>.yaml
    ```


Policies or {{ cgu_operator }} are conflicting with changes you need to make
:   Delete the `ClusterGroupUpgrade` CR to revert all policies to `inform` mode by running the following command:
    ```terminal
    $ oc delete cgu <cgu_name> -n <namespace>
    ```

    After the policies revert to `inform` mode, they do not enforce changes on the cluster.

    Fix the issue, then re-create the `ClusterGroupUpgrade` CR to resume the update.