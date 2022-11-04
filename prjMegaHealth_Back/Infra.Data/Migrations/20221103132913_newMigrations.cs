using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infra.Data.Migrations
{
    public partial class newMigrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Pedido");

            migrationBuilder.RenameColumn(
                name: "Number",
                table: "Endereco",
                newName: "Numero");

            migrationBuilder.RenameColumn(
                name: "ClientId",
                table: "Endereco",
                newName: "PessoaId");

            migrationBuilder.RenameColumn(
                name: "City",
                table: "Endereco",
                newName: "Cidade");

            migrationBuilder.AddColumn<string>(
                name: "PedidoId",
                table: "ItensPedido",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "PrecoTotal",
                table: "ItensPedido",
                type: "TEXT",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<decimal>(
                name: "ValUnit",
                table: "ItensPedido",
                type: "TEXT",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.CreateIndex(
                name: "IX_ItensPedido_PedidoId",
                table: "ItensPedido",
                column: "PedidoId");

            migrationBuilder.AddForeignKey(
                name: "FK_ItensPedido_Pedido_PedidoId",
                table: "ItensPedido",
                column: "PedidoId",
                principalTable: "Pedido",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ItensPedido_Pedido_PedidoId",
                table: "ItensPedido");

            migrationBuilder.DropIndex(
                name: "IX_ItensPedido_PedidoId",
                table: "ItensPedido");

            migrationBuilder.DropColumn(
                name: "PedidoId",
                table: "ItensPedido");

            migrationBuilder.DropColumn(
                name: "PrecoTotal",
                table: "ItensPedido");

            migrationBuilder.DropColumn(
                name: "ValUnit",
                table: "ItensPedido");

            migrationBuilder.RenameColumn(
                name: "PessoaId",
                table: "Endereco",
                newName: "ClientId");

            migrationBuilder.RenameColumn(
                name: "Numero",
                table: "Endereco",
                newName: "Number");

            migrationBuilder.RenameColumn(
                name: "Cidade",
                table: "Endereco",
                newName: "City");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Pedido",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
