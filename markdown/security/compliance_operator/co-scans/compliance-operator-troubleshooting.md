---
title: Troubleshooting Compliance Operator scans
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Troubleshooting Compliance Operator scans {id="compliance-operator-troubleshooting"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "compliance-troubleshooting" %}

You can use the information on how to troubleshoot the Compliance Operator to learn how to diagnose a problem or provide information in a bug report. 

When troubleshooting, review the following general tips:

*   The Compliance Operator emits Kubernetes events when something important happens. You can either view all events in the cluster using the command:
    ```terminal
     $ oc get events -n openshift-compliance
    ```

    Or view events for an object such as a scan using the command:
    ```terminal
    $ oc describe -n openshift-compliance compliancescan/cis-compliance
    ```
*   The Compliance Operator consists of several controllers, approximately one per API object. It could be useful to filter only those controllers that correspond to the API object having issues. If a `ComplianceRemediation` cannot be applied, view the messages from the `remediationctrl` controller. You can filter the messages from a single controller by parsing with `jq`:
    ```terminal
    $ oc -n openshift-compliance logs compliance-operator-775d7bddbd-gj58f \
        | jq -c 'select(.logger == "profilebundlectrl")'
    ```
*   The timestamps are logged as seconds since UNIX epoch in UTC. To convert them to a human-readable date, use `date -d @timestamp --utc`, for example:
    ```terminal
    $ date -d @1596184628.955853 --utc
    ```
*   Many custom resources, most importantly `ComplianceSuite` and `ScanSetting`, allow the `debug` option to be set. Enabling this option increases verbosity of the OpenSCAP scanner pods, and some other helper pods.
*   If a single rule is passing or failing unexpectedly, it could be helpful to run a single scan or a suite with only that rule to find the rule ID from the corresponding `ComplianceCheckResult` object and use it as the `rule` attribute value in a `Scan` CR. Then, together with the `debug` option enabled, the `scanner` container logs in the scanner pod would show the raw OpenSCAP logs.

{% leveloffset +1 %}{% include "./modules/compliance-anatomy.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-increasing-operator-limits.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/operator-resource-constraints.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/co-scansetting-resources.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/compliance-timeout.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/support.md" %}{% endleveloffset %}