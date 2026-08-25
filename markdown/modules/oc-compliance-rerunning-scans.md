{%- set _mod_docs_content_type = "PROCEDURE" %}
# Re-running scans {id="re-running-scans_{{ context }}"}

Although it is possible to run scans as scheduled jobs, you must often re-run a scan on demand, particularly after remediations are applied or when other changes to the cluster are made. {._abstract}

Rerunning a scan with the Compliance Operator requires the use of an annotation on the scan object. However, with the `oc-compliance` plugin you can rerun a scan with a single command.

**Procedure**

*   Rerun the scans for the `ScanSettingBinding` object named `my-binding` by running the following command:
    ```terminal
    $ oc compliance rerun-now scansettingbindings my-binding
    ```
    ```terminal title="Example output"
    Rerunning scans from 'my-binding': ocp4-cis
    Re-running scan 'openshift-compliance/ocp4-cis'
    ```