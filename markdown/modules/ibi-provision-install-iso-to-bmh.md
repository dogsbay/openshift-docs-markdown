{%- set _mod_docs_content_type = "PROCEDURE" %}
# Provisioning the live installation ISO to a host {id="ibi-provision-install-iso-to-bmh_{{ context }}"}

You can provision a live installation ISO to a bare-metal host to preinstall {{ sno }}. {._abstract}

**Procedure**

*   Using your preferred method, boot the target bare-metal host from the `rhcos-ibi.iso` live installation ISO to preinstall {{ sno }}.

**Verification**

1.  Login to the target host. 
1.  View the system logs by running the following command:
    ```terminal
    $ journalctl -b
    ```

    Example output:
    ```terminal
    Aug 13 17:01:44 10.46.26.129 install-rhcos-and-restore-seed.sh[2876]: time="2024-08-13T17:01:44Z" level=info msg="All the precaching threads have finished."
    Aug 13 17:01:44 10.46.26.129 install-rhcos-and-restore-seed.sh[2876]: time="2024-08-13T17:01:44Z" level=info msg="Total Images: 125"
    Aug 13 17:01:44 10.46.26.129 install-rhcos-and-restore-seed.sh[2876]: time="2024-08-13T17:01:44Z" level=info msg="Images Pulled Successfully: 125"
    Aug 13 17:01:44 10.46.26.129 install-rhcos-and-restore-seed.sh[2876]: time="2024-08-13T17:01:44Z" level=info msg="Images Failed to Pull: 0"
    Aug 13 17:01:44 10.46.26.129 install-rhcos-and-restore-seed.sh[2876]: time="2024-08-13T17:01:44Z" level=info msg="Completed executing pre-caching"
    Aug 13 17:01:44 10.46.26.129 install-rhcos-and-restore-seed.sh[2876]: time="2024-08-13T17:01:44Z" level=info msg="Pre-cached images successfully."
    Aug 13 17:01:44 10.46.26.129 install-rhcos-and-restore-seed.sh[2876]: time="2024-08-13 17:01:44" level=info msg="Skipping shutdown"
    Aug 13 17:01:44 10.46.26.129 install-rhcos-and-restore-seed.sh[2876]: time="2024-08-13 17:01:44" level=info msg="IBI preparation process finished successfully!"
    Aug 13 17:01:44 10.46.26.129 systemd[1]: var-lib-containers-storage-overlay.mount: Deactivated successfully.
    Aug 13 17:01:44 10.46.26.129 systemd[1]: Finished SNO Image-based Installation.
    Aug 13 17:01:44 10.46.26.129 systemd[1]: Reached target Multi-User System.
    Aug 13 17:01:44 10.46.26.129 systemd[1]: Reached target Graphical Interface.
    ```