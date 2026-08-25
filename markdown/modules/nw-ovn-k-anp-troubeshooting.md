{%- set _mod_docs_content_type = "REFERENCE" %}
# Checking creation of ANP {id="anp-troubleshooting_{{ context }}"}

To check that your `AdminNetworkPolicy` (ANP) and `BaselineAdminNetworkPolicy` (BANP) are created correctly, check the status outputs of the following commands: `oc describe anp` or `oc describe banp`. {._abstract}

A good status indicates `OVN DB plumbing was successful` and the `SetupSucceeded`.

```terminal title="Example ANP with a good status"
...
Conditions:
Last Transition Time:  2024-06-08T20:29:00Z
Message:               Setting up OVN DB plumbing was successful
Reason:                SetupSucceeded
Status:                True
Type:                  Ready-In-Zone-ovn-control-plane Last Transition Time:  2024-06-08T20:29:00Z
Message:               Setting up OVN DB plumbing was successful
Reason:                SetupSucceeded
Status:                True
Type:                  Ready-In-Zone-ovn-worker
Last Transition Time:  2024-06-08T20:29:00Z
Message:               Setting up OVN DB plumbing was successful
Reason:                SetupSucceeded
Status:                True
Type:                  Ready-In-Zone-ovn-worker2
...
```

If plumbing is unsuccessful, an error is reported from the respective zone controller.

````terminal title="Example of an ANP with a bad status and error message"
...
Status:
  Conditions:
    Last Transition Time:  2024-06-25T12:47:44Z
    Message:               error attempting to add ANP cluster-control with priority 600 because, OVNK only supports priority ranges 0-99
    Reason:                SetupFailed
    Status:                False
    Type:                  Ready-In-Zone-example-worker-1.example.example-org.net
    Last Transition Time:  2024-06-25T12:47:45Z
    Message:               error attempting to add ANP cluster-control with priority 600 because, OVNK only supports priority ranges 0-99
    Reason:                SetupFailed
    Status:                False
    Type:                  Ready-In-Zone-example-worker-0.example.example-org.net
    Last Transition Time:  2024-06-25T12:47:44Z
    Message:               error attempting to add ANP cluster-control with priority 600 because, OVNK only supports priority ranges 0-99
    Reason:                SetupFailed
    Status:                False
    Type:                  Ready-In-Zone-example-ctlplane-1.example.example-org.net
    Last Transition Time:  2024-06-25T12:47:44Z
    Message:               error attempting to add ANP cluster-control with priority 600 because, OVNK only supports priority ranges 0-99
    Reason:                SetupFailed
    Status:                False
    Type:                  Ready-In-Zone-example-ctlplane-2.example.example-org.net
    Last Transition Time:  2024-06-25T12:47:44Z
    Message:               error attempting to add ANP cluster-control with priority 600 because, OVNK only supports priority ranges 0-99
    Reason:                SetupFailed
    Status:                False
    Type:                  Ready-In-Zone-example-ctlplane-0.example.example-org.net
    ```
````

See the following section for `nbctl` commands to help troubleshoot unsuccessful policies.