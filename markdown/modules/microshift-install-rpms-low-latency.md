{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ microshift_short }} low latency RPM package {id="microshift-installing-low-latency-rpm-package_{{ context }}"}

When you install {{ microshift_short }}, the low latency RPM package is not installed by default. You can install the low latency RPM as an optional package. {._abstract}

**Prerequisites**

*   You installed the {{ microshift_short }} RPM.
*   You configured workload partitioning for {{ microshift_short }}.

**Procedure**

*   Install the low latency RPM package by running the following command:
    ```terminal
    $ sudo dnf install -y microshift-low-latency
    ```

    :::tip

    Wait to restart the host until after activating your TuneD profile. Restarting the host restarts {{ microshift_short }} and CRI-O, which applies the low latency manifests and activates the TuneD profile.
    
    :::


**Next steps**

1.  Configure the kubelet parameter for low latency in the {{ microshift_short }} `config.yaml`.
1.  Tune your operating system, for example, configure and activate a TuneD profile.
1.  Optional: Configure automatic activation of your TuneD profile.
1.  Optional: If you are using the x86_64 architecture, install {{ op_system_rt_kernel }}.
1.  Prepare your workloads for low latency.