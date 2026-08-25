{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a bootable ISO image on a USB drive {id="installing-with-usb-media_{{ context }}"}

You can install software using a bootable USB drive that contains an ISO image. Booting the server with the USB drive prepares the server for the software installation. {._abstract}

**Procedure**

1.  On the administration host, insert a USB drive into a USB port.
1.  Create a bootable USB drive, for example:
    ```terminal
    # dd if=<path_to_iso> of=<path_to_usb> status=progress
    ```

    where:
{%- if not openshift_origin %}

    &lt;path_to_iso>
    :   is the relative path to the downloaded ISO file, for example, `rhcos-live.iso`.

    &lt;path_to_usb>
    :   is the location of the connected USB drive, for example, `/dev/sdb`.
{% endif %}
{% if openshift_origin %}

    &lt;path_to_iso>
    :   is the relative path to the downloaded ISO file, for example, `fcos-live.iso`.

    &lt;path_to_usb>
    :   is the location of the connected USB drive, for example, `/dev/sdb`.
{%- endif %}

    After the ISO is copied to the USB drive, you can use the USB drive to install software on the server.