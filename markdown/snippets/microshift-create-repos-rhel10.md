{%- set _mod_docs_content_type = "SNIPPET" %}


:::note

To resolve this issue, follow these steps to use entitlement certificates to create the {{ op_system_base }} Content Delivery Network (CDN) repository files in the `/etc/yum.repos.d/` directory, and reinstall {{ microshift_short }}. 

1.  Navigate to the `/etc/yum.repos.d/` directory.
1.  Create the `rhocp-4.21.repo` repository for {{ microshift_short }} packages by entering the following information:
    ```terminal
    $ CERT=$(ls /etc/pki/entitlement/[0-9]*.pem | grep -v "-key.pem" | head -n1)
    $ KEY=$(ls /etc/pki/entitlement/[0-9]*-key.pem | head -n1)

    $ cat <<EOF | sudo tee /etc/yum.repos.d/rhocp-4.21.repo
    [rhocp-4.21]
    name=Red Hat OpenShift 4.21 for RHEL 9
    baseurl=https://cdn.redhat.com/content/dist/layered/rhel9/x86_64/rhocp/4.21/os
    enabled=1
    gpgcheck=1
    gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
    sslverify=1
    sslcacert=/etc/rhsm/ca/redhat-uep.pem
    sslclientcert=$CERT
    sslclientkey=$KEY
    EOF
    ```
1.  Create the `fast-datapath.repo` repository for Fast Datapath packages by entering the following information:Expand commentComment on line R38Resolved
    ```terminal
    $ CERT=$(ls /etc/pki/entitlement/[0-9]*.pem | grep -v "-key.pem" | head -n1)
    $ KEY=$(ls /etc/pki/entitlement/[0-9]*-key.pem | head -n1)

    $ cat <<EOF | sudo tee /etc/yum.repos.d/fast-datapath.repo
    [fast-datapath]
    name=Red Hat Fast Datapath for RHEL 9
    baseurl=https://cdn.redhat.com/content/dist/layered/rhel9/x86_64/fast-datapath/os
    enabled=1
    gpgcheck=1
    gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release
    sslverify=1
    sslcacert=/etc/rhsm/ca/redhat-uep.pem
    sslclientcert=$CERT
    sslclientkey=$KEY
    EOF
    ```
1.  Install {{ microshift_short }} using the new repository information.
    ```terminal
    $ dnf install microshift
    ```

:::