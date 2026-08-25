{%- set _mod_docs_content_type = "PROCEDURE" %}
# Fetching raw results {id="fetching-raw-results_{{ context }}"}

An administrator or auditor can review the complete detailed results of a scan as created by the OpenSCAP tool. These results contain more details than what is contained in the  `ComplianceCheckResult` custom resource (CR). {._abstract}

When a compliance scan finishes, the results of the individual checks are listed in the resulting `ComplianceCheckResult` custom resource (CR). However, an administrator or auditor might require the complete details of the scan. The OpenSCAP tool creates an Advanced Recording Format (ARF) formatted file with the detailed results. This ARF file is too large to store in a config map or other standard Kubernetes resource, so a persistent volume (PV) is created to contain it.

**Procedure**

1.  Fetch the results from the PV by running the following command:
    ```terminal
    $ oc compliance fetch-raw <object-type> <object-name> -o <output-path>
    ```

    where:
    *   `<object-type>` can be either `scansettingbinding`, `compliancescan` or `compliancesuite`, depending on which of these objects the scans were launched with.
    *   `<object-name>` is the name of the binding, suite, or scan object to gather the ARF file for, and `<output-path>` is the local directory to place the results.

        For example:
        ```terminal
        $ oc compliance fetch-raw scansettingbindings my-binding -o /tmp/
        ```
        ```terminal title="Example output"
        Fetching results for my-binding scans: ocp4-cis, ocp4-cis-node-worker, ocp4-cis-node-master
        Fetching raw compliance results for scan 'ocp4-cis'.......
        The raw compliance results are available in the following directory: /tmp/ocp4-cis
        Fetching raw compliance results for scan 'ocp4-cis-node-worker'...........
        The raw compliance results are available in the following directory: /tmp/ocp4-cis-node-worker
        Fetching raw compliance results for scan 'ocp4-cis-node-master'......
        The raw compliance results are available in the following directory: /tmp/ocp4-cis-node-master
        ```
1.  View the list of files in the directory:
    ```terminal
    $ ls /tmp/ocp4-cis-node-master/
    ```
    ```terminal title="Example output"
    ocp4-cis-node-master-ip-10-0-128-89.ec2.internal-pod.xml.bzip2  ocp4-cis-node-master-ip-10-0-150-5.ec2.internal-pod.xml.bzip2  ocp4-cis-node-master-ip-10-0-163-32.ec2.internal-pod.xml.bzip2
    ```
1.  Extract the results:
    ```terminal
    $ bunzip2 -c resultsdir/worker-scan/worker-scan-stage-459-tqkg7-compute-0-pod.xml.bzip2 > resultsdir/worker-scan/worker-scan-ip-10-0-170-231.us-east-2.compute.internal-pod.xml
    ```
1.  View the extracted results:
    ```terminal
    $ ls resultsdir/worker-scan/
    ```

    ```terminal title="Example output"
    worker-scan-ip-10-0-170-231.us-east-2.compute.internal-pod.xml
    worker-scan-stage-459-tqkg7-compute-0-pod.xml.bzip2
    worker-scan-stage-459-tqkg7-compute-1-pod.xml.bzip2
    ```