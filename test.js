<script>
    function generateInvoice() {
        const form = document.getElementById('invoiceForm');
        const formData = new FormData(form);
        const params = new URLSearchParams(formData).toString();
        window.location.href = `test.html`;
    }
</script>